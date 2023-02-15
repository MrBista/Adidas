import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Aside = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };
  return (
    <>
      <aside className='w-64 fixed h-screen top-[51px] left-0 border-r-2 border-slate-200'>
        <ul class='px-4 py-2 relative flex flex-col'>
          <Link
            to={'/'}
            class='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-indigo-100'
          >
            <div></div>
            <p href='' class='text-center flex items-center'>
              <span class='material-symbols-outlined'> dashboard </span>
              <span class='ml-2'>Dashboard</span>
            </p>
          </Link>
          <Link
            to={'/products'}
            class='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-indigo-100'
          >
            <p to='/products' href='' class='text-center flex items-center'>
              <span class='material-symbols-outlined'> newspaper </span>
              <span class='ml-2'>Products</span>
            </p>
          </Link>
          <Link
            to={'/categories'}
            class='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-indigo-100'
          >
            <p href='' class='text-center flex items-center'>
              <span class='material-symbols-outlined'> category </span>
              <span class='ml-2'>Categories</span>
            </p>
          </Link>
        </ul>

        <ul class='absolute w-full bottom-20 px-4 py-2'>
          <li
            onClick={handleLogout}
            class='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-indigo-100'
          >
            <p href='' class='text-center flex items-center'>
              <span class='material-symbols-outlined'> logout </span>
              <span class='ml-2'> Log Out</span>
            </p>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
