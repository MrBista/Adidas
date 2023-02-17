import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-10 bg-white'>
      <nav className='flex shadow-lg justify-between items-center'>
        <div className='border-slate-200 border-r-2'>
          <Link
            to={'/'}
            href=''
            className='flex items-center justify-start w-64'
          >
            <img
              src='https://www.adidas.co.id/media/logo/adidas-logo.png'
              alt=''
              className='w-[90px] px-4 py-2 aspect-video'
            />
            Admin Panel
          </Link>
        </div>

        <div className='w-32 flex items-center'>
          <div>
            Hai Bisma
            <p>Admin</p>
          </div>
          <img
            src='https://source.unsplash.com/O3ymvT7Wf9U'
            alt=''
            className='w-10 h-10 object-cover rounded-full'
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
