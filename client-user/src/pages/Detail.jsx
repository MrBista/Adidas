import React, { useEffect, useState } from 'react';
import { useParams, useNavigation, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi';
import { RxRulerHorizontal, RxEnvelopeClosed, RxHeart } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailShoe } from '../redux/action/actionCreator';
function Detail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const {
    detail: detailData,
    isLoading,
    errMsg,
  } = useSelector((state) => state.shoeDetail);
  useEffect(() => {
    dispatch(getDetailShoe(slug));
  }, [slug]);
  if (isLoading) {
    return <h1>loadingn</h1>;
  }
  console.log(detailData, 'ini detail');
  return (
    <>
      <div className='flex'>
        <div className='flex-1  border-gray-200'>
          <div className='JUMBOTRON'>
            <div className='h-[600px] bg-[#ECEEF0] flex justify-center relative'>
              <img src={detailData.mainImg} alt='' className='h-full' />

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
          <div className='flex justify-center'>
            <div className='w-[1000px] mt-10'>
              <h3 className='text-[2rem] text-black uppercase font-[600]'>
                {detailData?.name}
              </h3>
              <h5 className='mt-4 italic text-[1.4rem] font-[400]'>
                ULTRALIGHT PERFORMANCE GOLF SHOES MADE IN PART WITH RECYCLED
                MATERIALS.
              </h5>
              <p className='font-light mt-4'>
                Rethink what light can do and bring your A-game because these
                adidas golf shoes give new meaning to lightweight performance.
                The adidas ZG23 BOA® golf shoes are designed for tournament days
                and competitive play. From the comfort and added energy of a
                hybrid Lightstrike midsole to the support of a waterproof, soft
                and adaptive upper, they fuel every drive with an ultralight
                feel to give you a competitive edge. Dial in the BOA® Fit System
                for the stability to match powerful drives, and enjoy the
                close-to-the-ground feel of the six-cleat outsole for a stable
                stance. After all, you're here to compete.
              </p>
            </div>
          </div>
        </div>

        <div className='w-[480px] p-9 sticky top-0 h-fit '>
          <div className='px-8'>
            <h1 className='text-[52px] leading-[3.5rem] font-medium italic uppercase'>
              {detailData?.name}
            </h1>
            <p className='my-8 font-light text-[.9rem] text-gray-600'>
              WHITE/BLACK/MULTICOLOR[12132]
            </p>
            <p className='my-8'>
              {detailData.price?.toLocaleString('id-ID', {
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
                <span className='underline text-[.9rem] cursor-pointer hover:bg-black hover:text-white transition-all ease-linear duration-100 font-light'>
                  Size out of stock?
                </span>
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <button className='bg-black text-white px-4 py-3 w-[290px] flex justify-between items-center btn-bag relative'>
                <span className='uppercase'>Add to bag</span>
                <span>
                  <BsArrowRight className='text-[2rem]' />
                </span>
              </button>
              <div className='border border-black px-2 py-2 mt-2'>
                <RxHeart className='text-[2rem]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
