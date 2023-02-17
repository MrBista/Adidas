import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCategory from '../redux/fnFetch/getCategory';
const Categories = () => {
  const dispatch = useDispatch();
  const { isLoading, categories, errMsg } = useSelector(
    (state) => state.category
  );
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  console.log(categories);
  return (
    <>
      <div class='mt-4'>
        <div class='flex justify-between items-center'>
          <h3>Category</h3>
          <button class='flex items-center bg-gray-300 rounded-lg px-4 py-2 shadow-lg'>
            <span class='material-symbols-outlined'> add </span>
            <span>New Category</span>
          </button>
        </div>
        <table class='border-collapse text-left table-auto w-full mt-6'>
          <thead>
            <tr class='bg-gray-300'>
              <th class='px-4 py-2 text-center w-12'>No.</th>
              <th class='px-4 py-2'>Title</th>
              <th class='px-4 py-2'>Created At</th>
              <th class='px-4 py-2'>Updated At</th>
              <th class='px-4 py-2 text-end'>Delete</th>
            </tr>
          </thead>
          <tbody class='[&>*:nth-child(even)]:bg-gray-50'>
            {categories?.map(({ name, createdAt, updatedAt }, i) => {
              return (
                <tr class='[&>*]:px-4 [&>*]:py-2'>
                  <td class='text-center w-12'>{++i}</td>
                  <td>
                    <p>{name}</p>
                  </td>
                  <td>
                    <p>{createdAt.slice(0, 10)}</p>
                  </td>
                  <td>
                    <p>{createdAt.slice(0, 10)}</p>
                  </td>
                  <td class='text-end'>
                    <a href=''>
                      <span class='material-symbols-outlined'> delete </span>
                    </a>
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
