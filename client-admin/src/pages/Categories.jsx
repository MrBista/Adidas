import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrUpdate } from 'react-icons/gr';
import getCategory from '../redux/fnFetch/getCategory';
import deleteCategory from '../redux/fnFetch/deleteCategory';
import Loader from './Loader';
const Categories = () => {
  const dispatch = useDispatch();
  const { isLoading, categories, errMsg } = useSelector(
    (state) => state.category
  );
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleDelete = async (id) => {
    await dispatch(deleteCategory(id));
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className='mt-4'>
        <div className='flex justify-between items-center'>
          <h3>Category</h3>
          <Link
            to='/add-category'
            className='flex items-center bg-gray-300 rounded-lg px-4 py-2 shadow-lg'
          >
            <span className='material-symbols-outlined'> add </span>
            <span>New Category</span>
          </Link>
        </div>
        <table className='border-collapse text-left table-auto w-full mt-6'>
          <thead>
            <tr className='bg-gray-300'>
              <th className='px-4 py-2 text-center w-12'>No.</th>
              <th className='px-4 py-2'>Title</th>
              <th className='px-4 py-2'>Created At</th>
              <th className='px-4 py-2'>Updated At</th>
              <th className='px-4 py-2 text-end'>Update</th>
              <th className='px-4 py-2 text-end'>Delete</th>
            </tr>
          </thead>
          <tbody className='[&>*:nth-child(even)]:bg-gray-50'>
            {categories?.map(({ name, createdAt, updatedAt, id }, i) => {
              return (
                <tr className='[&>*]:px-4 [&>*]:py-2' key={i}>
                  <td className='text-center w-12'>{++i}</td>
                  <td>
                    <p>{name}</p>
                  </td>
                  <td>
                    <p>{createdAt.slice(0, 10)}</p>
                  </td>
                  <td>
                    <p>{createdAt.slice(0, 10)}</p>
                  </td>
                  <td className='text-end '>
                    <Link to={'/edit-category/' + id}>
                      <span className='material-symbols-outlined'>
                        {' '}
                        update{' '}
                      </span>
                    </Link>
                  </td>
                  <td className='text-end'>
                    <button onClick={() => handleDelete(id)}>
                      <span className='material-symbols-outlined'>
                        {' '}
                        delete{' '}
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Categories;
