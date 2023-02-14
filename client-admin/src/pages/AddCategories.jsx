import React from 'react';

const AddCategories = () => {
  return (
    <>
      <div className='mt-6'>
        <form class='[&>*]:my-6'>
          <div>
            <label for=''>
              Category <span class='text-red-500'>*</span>
            </label>
            <div class='w-[700px]'>
              <input
                type='text'
                class='w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:shadow-indigo-200'
                placeholder='Title News'
                v-model='name'
              />
            </div>
          </div>
          <div class='flex [&>*]:px-4 [&>*]:py-4 w-[700px] justify-between'>
            <button class='w-[45%] rounded-full border border-black'>
              Cancel
            </button>
            <button class='bg-indigo-300 w-[45%] rounded-full' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategories;
