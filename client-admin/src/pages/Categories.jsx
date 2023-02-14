import React from 'react';

const Categories = () => {
  return (
    <>
      <div class='mt-4'>
        <div class='flex justify-between items-center'>
          <h3>Category</h3>
          <button class='flex items-center bg-indigo-200 rounded-lg px-4 py-2 shadow-lg'>
            <span class='material-symbols-outlined'> add </span>
            <span>New Category</span>
          </button>
        </div>
        <table class='border-collapse text-left table-auto w-full mt-6'>
          <thead>
            <tr class='bg-indigo-50'>
              <th class='px-4 py-2 text-center w-12'>No.</th>
              <th class='px-4 py-2'>Title</th>
              <th class='px-4 py-2 text-end'></th>
            </tr>
          </thead>
          <tbody class='[&>*:nth-child(even)]:bg-indigo-100'>
            <tr class='[&>*]:px-4 [&>*]:py-2'>
              <td class='text-center w-12'>1</td>
              <td>
                <p>Dewas</p>
              </td>
              <td class='text-end'>
                <a href=''>
                  <span class='material-symbols-outlined'> delete </span>
                </a>
                <a href=''>
                  <span class='material-symbols-outlined'> edit </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Categories;
