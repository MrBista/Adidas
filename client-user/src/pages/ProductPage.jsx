import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getShoes } from '../redux/action/actionCreator';
import CardShoe from '../components/CardShoe';
const ProductPage = () => {
  const { isLoading, data, errorMsg } = useSelector((state) => {
    return state.shoes;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoes());
  }, []);
  if (isLoading) {
    return <h1>masih loading</h1>;
  }
  console.log(data, '=======', errorMsg);
  return (
    <>
      <div className='w-[90vw] max-w-[1368px] m-auto mt-4'>
        <div className='flex gap-2'>
          <p className='flex gap-2'>
            <span className='material-symbols-outlined'>reply</span>
            <span className='uppercase font-semi-black underline'>BACK</span>
          </p>
          <span className='font-light cursor-default'>Women</span>
        </div>
        <div className='mt-8 flex gap-2 items-center h-6'>
          <h3 className='text-[2.5rem] italic'>WOMEN</h3>
          <span className='text-gray-400'>[3123]</span>
        </div>
        <div className='w-full flex justify-between items-center border border-black mt-8 px-4 h-14 sticky top-4 z-50 bg-white'>
          <ul className='flex items-center gap-2'>
            <li className='hover:border border border-transparent hover:border-black px-4 py-2'>
              <a
                p
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
                p
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
                p
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
                p
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
                p
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
                p
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
                p
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
              p
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
              return <CardShoe {...el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
