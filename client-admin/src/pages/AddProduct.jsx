import React, { useEffect, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCategory from '../redux/fnFetch/getCategory';
import postProduct from '../redux/fnFetch/addProduct';
import { cleanAllError } from '../redux/action/actionCreator';
import Loader from './Loader';

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputImages, setInputImages] = useState(['']);
  const [productForm, setProductForm] = useState({
    name: '',
    mainImg: '',
    price: '',
    categoryId: '1',
    description: '',
  });

  const {
    isLoading,
    categories,
    errMsg: errCategory,
  } = useSelector((state) => state.category);
  const { errMsg: errProduct, isLoadingPost } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getCategory());
    dispatch(cleanAllError());
  }, []);

  const addImagesField = () => {
    setInputImages([...inputImages, ``]);
  };
  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handelInputImages = (value, index) => {
    const newImages = [...inputImages];
    newImages[index] = value;
    console.log(newImages);
    setInputImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postProduct(productForm, inputImages));

      navigate('/products');
    } catch (err) {
      console.log(JSON.parse(err));
    }
  };
  if (isLoading || isLoadingPost) {
    return <Loader />;
  }
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
                defaultValue={''}
                onChange={handleChange}
              >
                <option disabled value={''}>
                  --Category--
                </option>
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
                  />
                </div>
              </div>
            );
          })}
          <div>
            <div className='w-[700px]'>
              <button
                type='button'
                className='bg-gray-300 w-[45%] rounded-full px-4 py-4'
                placeholder='Image shoe'
                onClick={addImagesField}
              >
                Add Images
              </button>
            </div>
          </div>

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
            <button className='bg-gray-300 w-[45%] rounded-full'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
