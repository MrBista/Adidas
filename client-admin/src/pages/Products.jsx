import React from 'react';

const Products = () => {
  return (
    <>
      <div class='mt-4'>
        <div class='flex justify-between items-center'>
          <h3>Shoes</h3>
          <button class='flex items-center bg-indigo-200 rounded-lg px-4 py-2 shadow-lg'>
            <span class='material-symbols-outlined'> add </span>
            <span>New News</span>
          </button>
        </div>
        <table class='border-collapse text-left table-auto w-full mt-6'>
          <thead>
            <tr class='bg-indigo-50'>
              <th class='px-4 py-2 text-center w-12'>No.</th>
              <th class='px-4 py-2'>Title</th>
              <th class='px-4 py-2'>Image</th>
              <th class='px-4 py-2'>Description</th>
              <th class='px-4 py-2'>Author</th>
              <th class='px-4 py-2'>Status</th>
              <th class='px-4 py-2 text-center'>Update</th>
            </tr>
          </thead>
          <tbody class='[&>*:nth-child(even)]:bg-indigo-100'>
            <tr>
              <td class='text-center w-12'>1</td>
              <td>
                <p>sepatu bagus</p>
              </td>
              <td>
                <div class='h-24 w-36 aspect-video'>
                  <img
                    src='https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/p/hp7878_2_footwear_photography_side20lateral20view_grey.jpg'
                    class='h-[100%] w-[100%] object-cover'
                    alt=''
                  />
                </div>
              </td>
              <td class='w-80'>
                <p class='px-4 py-2'>blblblblblalbalblablalb</p>
              </td>
              <td>
                <p>mr bista</p>
              </td>
              <td>
                <select class='px-4 py-2 bg-indigo-200 rounded-md focus:outline-none shadow-lg cursor-pointer'>
                  <option value='inactive'>Inactive</option>
                  <option value='active'>active</option>
                  <option value='archive'>archive</option>
                </select>
              </td>
              <td class='text-center'>
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

export default Products;
