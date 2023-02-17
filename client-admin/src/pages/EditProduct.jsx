import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputImages, setInputImages] = useState(['']);
  const [productForm, setProductForm] = useState({
    name: '',
    mainImg: '',
    price: '',
    categoryId: '',
    description: '',
  });
  useEffect(() => {
    const exactProduct = async () => {
      try {
        const res = await fetch('http://localhost:3000/' + id, {
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        if (!res) {
          throw new Error(res.text());
        }
        const resJson = await res.json();
        // console.log(resJson, 'ini json');
        setProductForm({ ...productForm, ...resJson });
      } catch (err) {
        console.log(err);
      }
    };
    exactProduct();
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
    setInputImages(newImages);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const images = inputImages.map((el) => {
        return { imgUrl: el };
      });
      console.log(images, productForm);

      const res = await fetch('http://localhost:3000/add', {
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify({ ...productForm, images: images }),
        method: 'post',
      });
      if (!res.ok) {
        throw new Error(res.text());
      }
      const resJson = await res.json();
      console.log(resJson);
      navigate('/products');
    } catch (err) {
      console.log(err);
    }
  };
  console.log(productForm, 'ada gak sih?');

  return (
    <>
      <div className=' '>
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
                v-model='product.categoryId'
                name='categoryId'
                onChange={handleChange}
              >
                <option value='1'>Dewasa</option>
                <option value='2'>Kids</option>
                <option value='3'>Women</option>
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

          {productForm.Images?.map((el, index) => {
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
                    value={el.imgUrl}
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
                v-model='product.imgUrl'
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

export default EditProduct;
