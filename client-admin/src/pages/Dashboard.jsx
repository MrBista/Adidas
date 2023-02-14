import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div class='mt-4'>
        <div class='flex'>
          <div class='w-64 h-60 shadow-lg mr-6 border border-black rounded-md flex flex-col p-4'>
            <div class='h-20 w-20 self-center'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/21/21601.png'
                class='h-[100%] w-[100%] object-cover'
                alt=''
              />
            </div>
            <div>
              <h3 class='text-2xl font-[300]'>Total News</h3>
              <p class='text-[50px]'>10</p>
            </div>
          </div>
          <div class='w-64 h-60 shadow-lg border border-black rounded-md flex flex-col p-4'>
            <div class='h-20 w-20 self-center'>
              <img
                src='https://icon-library.com/images/icon-categories/icon-categories-8.jpg'
                class='h-[100%] w-[100%] object-cover'
                alt=''
              />
            </div>
            <div>
              <h3 class='text-2xl font-[300]'>Total Category</h3>
              <p class='text-[50px]'>20</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
