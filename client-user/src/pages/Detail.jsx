import React from 'react';
import { useParams, useNavigation, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi';
import { RxRulerHorizontal, RxEnvelopeClosed } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs';
function Detail() {
  const { slug } = useParams();

  return (
    <>
      <div className='flex'>
        <div className='flex-1 border-r-[.1rem] border-gray-200'>
          <div className='JUMBOTRON'>
            <div className='h-[600px] bg-[#ECEEF0] flex justify-center relative'>
              <img
                src='https://www.adidas.co.id/media/catalog/product/g/y/gy9716_2_footwear_photography_side20lateral20view_grey.jpg'
                alt=''
                className='h-full'
              />

              <button className='bg-white p-4 border border-black absolute left-6 top-2/4'>
                <HiOutlineChevronLeft className='text-[2rem] font-thin' />
              </button>
              <button className='bg-white p-4 border border-black absolute right-6 top-2/4'>
                <HiOutlineChevronRight className='text-[2rem] font-thin' />
              </button>
              <p className='absolute top-7 right-5 -rotate-90 italic bg-white font-light'>
                New
              </p>
              <div className='flex gap-2 absolute left-5 top-8'>
                <a href='' className='flex gap-2'>
                  <span className='material-symbols-outlined'>reply</span>
                  <span className='uppercase font-semi-black underline'>
                    BACK
                  </span>
                </a>
                <span className='font-light cursor-default'>Women</span>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>

        <div className='w-[480px] p-6 sticky top-0 h-fit'>
          <div>
            <h1 className='text-[52px] leading-[3.5rem] font-medium italic'>
              4DFWD 2. Innovated to turn weight into forward motion.
            </h1>
            <p className='my-8 font-light text-[.9rem] text-gray-600'>
              WHITE/BLACK/MULTICOLOR[12132]
            </p>
            <p className='my-8'>
              Rp
              {'2000'.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}
            </p>
            <div className='my-8'>
              <p className='my-4 text-[.8rem] tracking-wider'>SELECT SIZE</p>
              <div className='flex gap-x-3'>
                <div className='outline-none px-2 py-2 cursor-pointer border border-black bg-white w-[90px] flex justify-between'>
                  <span>US</span>
                  <HiOutlineChevronDown />
                </div>
                <div className='outline-none px-2 py-2 cursor-pointer border border-black bg-white w-[90px] flex justify-between'>
                  <span>SIZE</span>
                  <HiOutlineChevronDown />
                </div>
              </div>
            </div>
            <div className='my-4 flex justify-between'>
              <p className='flex items-center gap-2'>
                <RxRulerHorizontal />
                <span className='underline text-[.9rem] cursor-pointer hover:bg-black hover:text-white transition-all ease-linear duration-100'>
                  SIZE GUIDANCE
                </span>
              </p>
              <p className='flex items-center gap-2'>
                <RxEnvelopeClosed />
                <span className='underline text-[.9rem] cursor-pointer hover:bg-black hover:text-white transition-all ease-linear duration-100'>
                  Size out of stock?
                </span>
              </p>
            </div>
            <div>
              <button className='bg-black text-white px-4 py-3 w-[290px]'>
                <span>Add to bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
