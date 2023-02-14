import React from 'react';

const AddProduct = () => {
  return (
    <>
      <div class='mt-6 '>
        <h1>New Product</h1>
        <form class='[&>*]:my-6'>
          <div>
            <label for=''>
              Title <span class='text-red-500'>*</span>
            </label>
            <div class='w-[700px]'>
              <input
                type='text'
                class='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Title News'
                v-model='product.title'
              />
            </div>
          </div>
          <div>
            <label for=''>
              Category <span class='text-red-500'>*</span>
            </label>
            <div class='w-[700px]'>
              <select
                type='text'
                class='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Title News'
                v-model='product.categoryId'
              >
                <option value='' selected disabled>
                  Category News
                </option>
                <option v-for='category in categoryData'>Dewasa</option>
              </select>
            </div>
          </div>
          <div>
            <label for=''>
              Description <span class='text-red-500'>*</span>
            </label>
            <div class='w-[700px]'>
              <input
                type='text'
                class='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Description News'
                v-model='product.content'
              />
            </div>
          </div>
          <div>
            <label for=''>
              Image <span class='text-red-500'>*</span>
            </label>
            <div class='w-[700px]'>
              <input
                type='text'
                class='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Image News'
                v-model='product.imgUrl'
              />
            </div>
          </div>
          <div class='flex [&>*]:px-4 [&>*]:py-4 w-[700px] justify-between'>
            <button
              className='w-[45%] rounded-full border border-black'
              type='button'
            >
              Cancel
            </button>
            <button className='bg-indigo-300 w-[45%] rounded-full'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
