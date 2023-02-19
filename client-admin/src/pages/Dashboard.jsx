import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCategory from '../redux/fnFetch/getCategory';
import getProducts from '../redux/fnFetch/getProducts';
import Loader from './Loader';
const Dashboard = () => {
  const dispatch = useDispatch();
  const { product, category } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
  }, []);

  if (product.isLoading || category.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className='mt-4'>
        <div className='flex'>
          <div className='w-64 h-60 shadow-lg mr-6 border border-black rounded-md flex flex-col p-4'>
            <div className='h-20 w-20 self-center'>
              <img
                src='https://i.pinimg.com/736x/dc/53/50/dc5350243970437d9fff2c8db3a9975b--running-shoes-sermon-series.jpg'
                className='h-[100%] w-[100%] object-cover'
                alt=''
              />
            </div>
            <div>
              <h3 className='text-2xl font-[300]'>Total Shoes</h3>
              <p className='text-[50px]'>{product?.products?.length}</p>
            </div>
          </div>
          <div className='w-64 h-60 shadow-lg border border-black rounded-md flex flex-col p-4'>
            <div className='h-20 w-20 self-center'>
              <img
                src='https://icon-library.com/images/icon-categories/icon-categories-8.jpg'
                className='h-[100%] w-[100%] object-cover'
                alt=''
              />
            </div>
            <div>
              <h3 className='text-2xl font-[300]'>Total Category</h3>
              <p className='text-[50px]'>{category?.categories?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
