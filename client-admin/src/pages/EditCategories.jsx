import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getSingleCategory from '../redux/fnFetch/singleCategory';
import editCategory from '../redux/fnFetch/editCategory';
import {
  cleanAllErrorCategory,
  editCategoryFailed,
} from '../redux/action/actionCreator';
import Loader from './Loader';
const EditCategories = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ name: '' });
  const { exactCategory, isLoadingEdit, errMsg } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleCategory(id));
    dispatch(cleanAllErrorCategory());
    setCategory(exactCategory);
  }, []);
  useEffect(() => {
    setCategory({ ...category, ...exactCategory });
  }, [Object.values(exactCategory).length > 0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(editCategory(id, category));
      navigate('/categories');
    } catch (err) {}
  };
  // if (isLoadingEdit) {
  //   return <Loader />;
  // }

  return (
    <div className='mt-6'>
      {errMsg?.message && (
        <p className='text-red-500 text-[1.4rem] capitalize'>
          {errMsg?.message}
        </p>
      )}
      <form className='[&>*]:my-6' onSubmit={handleSubmit}>
        <div>
          <label>
            Category <span className='text-red-500'>*</span>
          </label>
          <div className='w-[700px]'>
            <input
              type='text'
              className='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
              placeholder='Category Name'
              value={category.name}
              onChange={(e) => {
                setCategory({ name: e.target.value });
              }}
            />
          </div>
        </div>
        <div className='flex [&>*]:px-4 [&>*]:py-4 w-[700px] justify-between'>
          <Link
            to={'/categories'}
            className='w-[45%] rounded-full border border-black text-center'
          >
            Cancel
          </Link>
          <button className='bg-gray-300 w-[45%] rounded-full' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategories;
