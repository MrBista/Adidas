import React from 'react';

const Header = () => {
  return (
    <div className='w-full border-b-2 h-[6rem]'>
      <header className='w-[95vw] m-auto  relative h-full'>
        <div className='flex h-full items-center'>
          <div className='flex   w-full items-end justify-between'>
            <div className='w-[75px] h-[60px] mb-1'>
              <a href=''>
                <img
                  src='https://www.adidas.co.id/media/logo/adidas-logo.png'
                  alt=''
                  className='mix-blend-multiply'
                />
              </a>
            </div>
            <ul className='flex items-end justify-center w-auto mr-[-10rem]'>
              <li className='px-2  border-b-4 border-transparent hover:border-b-4 hover:border-black transition-all ease-in duration-200 mr-1'>
                <a href='' className='text-[1.1rem] text-[#222]'>
                  MEN
                </a>
              </li>
              <li className='px-2  border-b-4 border-transparent hover:border-b-4 hover:border-black transition-all ease-in duration-200 mr-1'>
                <a href='' className='text-[1.1rem] text-[#222]'>
                  WOMEN
                </a>
              </li>
              <li className='px-2  border-b-4 border-transparent hover:border-b-4 hover:border-black transition-all ease-in duration-200 mr-1'>
                <a href='' className='text-[1.1rem] text-[#222]'>
                  KIDS
                </a>
              </li>
              <li className='px-2  border-b-4 border-transparent hover:border-b-4 hover:border-black transition-all ease-in duration-200 mr-1'>
                <a href='' className='text-[1.1rem] text-[#222]'>
                  SPORTS
                </a>
              </li>
              <li className='px-2  border-b-4 border-transparent hover:border-b-4 hover:border-black transition-all ease-in duration-200 mr-1'>
                <a href='' className='text-[1.1rem] text-[#222]'>
                  BRANDS
                </a>
              </li>
              <li className='px-2  border-b-4 border-transparent hover:border-b-4 hover:border-black transition-all ease-in duration-200 mr-1'>
                <a href='' className='text-[1.1rem] text-[#222]'>
                  OUTLET
                </a>
              </li>
            </ul>
            <div className='flex items-center gap-3'>
              <div className='flex justify-between items-center bg-white border px-2 py-2 rounded h-[2.2rem] w-[15rem] '>
                <input
                  type='text'
                  placeholder='search'
                  className=' outline-none h-full w-full'
                />
                <span class='material-symbols-outlined cursor-pointer '>
                  search
                </span>
              </div>
              <span class='material-symbols-outlined cursor-pointer'>
                shopping_bag
              </span>
            </div>
          </div>
        </div>
        <ul className='absolute right-0 top-0 flex gap-4 items-center mt-2'>
          <li>
            <a href='' className='font-light'>
              order status
            </a>
          </li>
          <li>
            <a href='' className='font-light'>
              help
            </a>
          </li>
          <li>
            <a href='' className='font-light'>
              newsletter
            </a>
          </li>
          <li>
            <a href='' className='font-light'>
              signup
            </a>
          </li>
          <li>
            <a href=''>
              <img
                src='https://adl-foundation.adidas.com/prod/v40.0.0/assets/flags/gb.svg'
                alt=''
                className='h-[11px] w-[20px]'
              />
            </a>
          </li>
          <li>
            <a href='' className='font-light'>
              login
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;