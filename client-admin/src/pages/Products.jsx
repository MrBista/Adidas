import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ImPencil2 } from 'react-icons/im';
import { MdDelete } from 'react-icons/md';
import getProducts from '../redux/fnFetch/getProducts';
import deleteProduct from '../redux/fnFetch/deleteProduct';
import Loader from './Loader';
const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, errMsg, isLoadingDelete } = useSelector(
    (state) => state.product
  );
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProduct(id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className='mt-4'>
        <div className='flex justify-between items-center'>
          <h3>Shoes</h3>
          <Link
            to={'/add-product'}
            className='flex items-center bg-gray-300 rounded-lg px-4 py-2 shadow-lg'
          >
            <span className='material-symbols-outlined'> add </span>
            <span>New Shoes</span>
          </Link>
        </div>
        <table className='border-collapse text-left table-auto w-full mt-6'>
          <thead>
            <tr className='bg-gray-300'>
              <th className='px-4 py-2 text-center w-12'>No.</th>
              <th className='px-4 py-2'>Title</th>
              <th className='px-4 py-2'>Category</th>
              <th className='px-4 py-2'>Main Image</th>
              <th className='px-4 py-2'>Images</th>
              <th className='px-4 py-2'>Price</th>

              <th className='px-4 py-2'>Author</th>
              <th className='px-4 py-2 text-center'>Update</th>
              <th className='px-4 py-2 text-center'>Delete</th>
            </tr>
          </thead>
          <tbody className='[&>*:nth-child(even)]:bg-gray-50'>
            {products.map(
              (
                {
                  id,
                  name,
                  mainImg,
                  User: { email },
                  Category,
                  Images,
                  description,
                  price,
                },
                i
              ) => {
                return (
                  <tr key={id}>
                    <td className='text-center w-12'>{++i}</td>
                    <td>
                      <p>{name}</p>
                    </td>
                    <td className='text-left'>
                      <p>{Category.name}</p>
                    </td>
                    <td className='text-left'>
                      <div className='h-24 w-36 aspect-video'>
                        <img
                          src={mainImg}
                          className='h-[100%] w-[100%] object-contain'
                          alt=''
                        />
                      </div>
                    </td>
                    <td className=''>
                      <button className='px-4 py-2 border border-black'>
                        Show Images
                      </button>
                    </td>

                    <td>
                      <p>{price}</p>
                    </td>
                    <td>
                      <p>{email}</p>
                    </td>

                    <td className='text-center'>
                      <Link to={`/edit-product/${id}`}>
                        <span className='material-symbols-outlined'>
                          {' '}
                          edit{' '}
                        </span>
                      </Link>
                    </td>
                    <td className='text-center'>
                      <button onClick={() => handleDelete(id)}>
                        <MdDelete className='text-[1.5rem] block text-red-400' />
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
