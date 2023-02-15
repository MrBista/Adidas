import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

function SharedLayout() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <main className='flex-1 ml-64 py-4 px-6'>
          <Aside />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default SharedLayout;
