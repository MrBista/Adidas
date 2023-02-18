import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import postCategory from '../redux/fnFetch/addCategory';
import { cleanAllErrorCategory } from '../redux/action/actionCreator';
const AddCategories = ({ isEdit }) => {
  const { id } = useParams();
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errMsg } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(cleanAllErrorCategory());
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postCategory(category));
      navigate('/categories');
    } catch (err) {
      console.log(err, 'udah bisa juga ajg');
    }
  };

  return (
    <>
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
    </>
  );
};

export default AddCategories;
