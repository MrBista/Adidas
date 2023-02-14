import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const ProductPage = () => {
  const { data, isLoading, isError } = useFetch(
    'http://localhost:3000/products'
  );
  if (isLoading) {
    return <h1>masih loading</h1>;
  }
  console.log(data);
  return (
    <>
      <div className='w-[90vw] max-w-[1368px] m-auto mt-4'>
        <div className='flex gap-2'>
          <a href='' className='flex gap-2'>
            <span className='material-symbols-outlined'>reply</span>
            <span className='uppercase font-semi-black underline'>BACK</span>
          </a>
          <span className='font-light cursor-default'>Women</span>
        </div>
        <div className='mt-8 flex gap-2 items-center h-6'>
          <h3 className='text-[2.5rem] italic'>WOMEN</h3>
          <span className='text-gray-400'>[3123]</span>
        </div>
        <div className='w-full flex justify-between items-center border border-black mt-8 px-4 h-14 sticky top-4 z-50 '>
          <ul className='flex items-center gap-2'>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                href=''
                className='flex justify-between items-center gap-1 font-light '
              >
                <span className='tracking-wider'>PRICE</span>
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                href=''
                className='flex justify-between items-center gap-1 font-light '
              >
                <span className='tracking-wider'>COLOR</span>
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                href=''
                className='flex justify-between items-center gap-1 font-light '
              >
                <span className='tracking-wider'>GENDER</span>
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                href=''
                className='flex justify-between items-center gap-1 font-light '
              >
                <span className='tracking-wider'>SIZE</span>
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                href=''
                className='flex justify-between items-center gap-1 font-light '
              >
                <span className='tracking-wider'>DIVISION</span>
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                href=''
                className='flex justify-between items-center gap-1 font-light '
              >
                <span className='tracking-wider'>SPORT/BRAND</span>
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                href=''
                className='flex justify-between items-center gap-1 font-light '
              >
                <span className='tracking-wider'>PRODUCT TYPE</span>
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </a>
            </li>
          </ul>
          <span className='hover:border border border-transparent hover:border-black px-4 py-2'>
            <a
              href=''
              className='flex justify-between items-center gap-1 font-light '
            >
              <span className='tracking-wider'>RECOMMENDED</span>
              <span className='material-symbols-outlined'>
                keyboard_arrow_down
              </span>
            </a>
          </span>
        </div>
        <div className='m-auto mt-8'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {data.map((el) => {
              return (
                <div className='w-[318px] h-[432px] border rounded overflow-hidden shadow-md relative hover:border hover:border-black transition-all ease-linear duration-100 cursor-pointer'>
                  <a href=''>
                    <span className='material-symbols-outlined absolute top-2 right-2'>
                      favorite
                    </span>
                  </a>
                  <span className='absolute top-4 italic font-light bg-white px-2  left-2 -rotate-90'>
                    NEW
                  </span>

                  <div className='flex flex-col'>
                    <img
                      src={el.mainImg}
                      alt=''
                      className='w-full h-[318px] object-cover'
                    />
                    <div className='mt-[.85rem] p-2'>
                      <h2 className='text-gray-400 font-light capitalize'>
                        women-sprit
                      </h2>
                      <p className='font-light mt-1'>{el.name}</p>
                      <p className='font-light mt-1'>
                        {el?.price?.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
