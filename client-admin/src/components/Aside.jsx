import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { MdSpaceDashboard, MdCategory } from 'react-icons/md';
import { GiRunningShoe } from 'react-icons/gi';

const Aside = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };
  return (
    <>
      <aside className='w-64 fixed h-screen top-[51px] left-0 border-r-2 border-slate-200'>
        <ul className='px-4 py-2 relative flex flex-col'>
          <Link
            to={'/'}
            className='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-gray-300'
          >
            <div></div>
            <p href='' className='text-center flex items-center'>
              <MdSpaceDashboard className='text-[1.6rem]' />
              <span className='ml-2'>Dashboard</span>
            </p>
          </Link>
          <Link
            to={'/products'}
            className='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-gray-300'
          >
            <p to='/products' href='' className='text-center flex items-center'>
              <GiRunningShoe className='text-[1.6rem]' />
              <span className='ml-2'>Products</span>
            </p>
          </Link>
          <Link
            to={'/categories'}
            className='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-gray-300'
          >
            <p href='' className='text-center flex items-center'>
              <MdCategory className='text-[1.6rem]' />
              <span className='ml-2'>Categories</span>
            </p>
          </Link>
          <Link
            to={'/register'}
            className='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-gray-300'
          >
            <p href='' className='text-center flex items-center'>
              <BsFillPersonPlusFill className='text-[1.6rem]' />
              <span className='ml-2'>Register</span>
            </p>
          </Link>
        </ul>

        <ul className='absolute w-full bottom-20 px-4 py-2'>
          <li
            onClick={handleLogout}
            className='px-2 py-3 active:border-l-4 border-indigo-300 cursor-pointer transition-all duration-100 ease-in rounded-sm hover:bg-gray-300'
          >
            <p href='' className='text-center flex items-center'>
              <span className='material-symbols-outlined'> logout </span>
              <span className='ml-2'> Log Out</span>
            </p>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
