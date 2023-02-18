import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCategory from '../redux/fnFetch/getCategory';
import getSingleProduct from '../redux/fnFetch/singleProduct';
import editProduct from '../redux/fnFetch/editProduct';
import { cleanAllError } from '../redux/action/actionCreator';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    isLoading,
    categories,
    errMsg: errCategory,
  } = useSelector((state) => state.category);
  const {
    exactProduct,
    isLoading: loading,
    errMsg: errProduct,
  } = useSelector((state) => state.product);
  const [inputImages, setInputImages] = useState(['']);
  const [productForm, setProductForm] = useState({
    name: '',
    mainImg: '',
    price: '',
    categoryId: '',
    description: '',
  });
  useEffect(() => {
    // const exactProduct = async () => {
    //   try {
    //     const res = await fetch('http://localhost:3000/' + id, {
    //       headers: {
    //         access_token: localStorage.getItem('access_token'),
    //       },
    //     });
    //     if (!res) {
    //       throw new Error(res.text());
    //     }
    //     const resJson = await res.json();
    //     setProductForm({ ...productForm, ...resJson });
    //     setInputImages((prevVal) => {
    //       const newImage = resJson.Images.map((el) => el.imgUrl);
    //       console.log(newImage, 'new image ajg');
    //       return [...newImage];
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    dispatch(getSingleProduct(id));
    dispatch(getCategory());
    dispatch(cleanAllError());
  }, []);
  useEffect(() => {
    setProductForm({ ...productForm, ...exactProduct });
    setInputImages((prevVal) => {
      let newImage = exactProduct?.Images?.map((el) => el.imgUrl);
      return newImage;
    });
  }, [Object.values(exactProduct).length > 0]);
  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handelInputImages = (value, index) => {
    const newImages = [...inputImages];
    newImages[index] = value;
    setInputImages(newImages);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const images = inputImages.map((el) => {
    //     return { imgUrl: el };
    //   });
    //   const res = await fetch(`${import.meta.env.VITE_APP_URL}/${id}`, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       access_token: localStorage.getItem('access_token'),
    //     },
    //     body: JSON.stringify({ ...productForm, images }),
    //     method: 'put',
    //   });
    //   if (!res.ok) {
    //     throw new Error(res.text());
    //   }
    //   const resJson = await res.json();
    //   navigate('/products');
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      await dispatch(editProduct(id, productForm, inputImages));

      navigate('/products');
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading || loading) {
    return <h1>Loading</h1>;
  }
  // console.log(productForm);
  return (
    <>
      <div className=' '>
        {errProduct?.message && (
          <p className='text-red-500 text-[2rem] capitalize'>
            {errProduct?.message}
          </p>
        )}
        <form className='[&>*]:my-6' onSubmit={handleSubmit}>
          <div>
            <label>
              Name <span className='text-red-500'>*</span>
            </label>
            <div className='w-[700px]'>
              <input
                type='text'
                className='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Name shoe'
                v-model='product.title'
                name='name'
                value={productForm.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>
              Category <span className='text-red-500'>*</span>
            </label>
            <div className='w-[700px]'>
              <select
                type='text'
                className='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Title News'
                name='categoryId'
                onChange={handleChange}
                defaultValue={productForm?.Category?.id}
              >
                <option disabled>--Category--</option>
                {categories.map(({ name, id }) => {
                  return (
                    <option value={id} key={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label>
              Description <span className='text-red-500'>*</span>
            </label>
            <div className='w-[700px]'>
              <input
                type='text'
                className='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Description News'
                v-model='product.content'
                name='description'
                value={productForm.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>
              Price <span className='text-red-500'>*</span>
            </label>
            <div className='w-[700px]'>
              <input
                type='number'
                className='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Price shoe'
                v-model='product.content'
                name='price'
                value={productForm.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>
              Main Image <span className='text-red-500'>*</span>
            </label>
            <div className='w-[700px]'>
              <input
                type='text'
                className='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Image shoe'
                v-model='product.imgUrl'
                name='mainImg'
                value={productForm.mainImg}
                onChange={handleChange}
              />
            </div>
          </div>

          {inputImages?.map((el, index) => {
            return (
              <div key={index}>
                <label>
                  Images <span className='text-red-500'>*</span>
                </label>
                <div className='w-[700px]'>
                  <input
                    type='text'
                    className='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                    placeholder='Image shoe'
                    name={index}
                    onChange={(e) => handelInputImages(e.target.value, index)}
                    value={el}
                  />
                </div>
              </div>
            );
          })}

          <div className='flex [&>*]:px-4 [&>*]:py-4 w-[700px] justify-between'>
            <button
              onClick={() => {
                navigate('/products');
              }}
              className='w-[45%] rounded-full border border-black'
              type='button'
            >
              Cancel
            </button>
            <button className='bg-gray-300 w-[45%] rounded-full' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
