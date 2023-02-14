import React from 'react';
import { useParams, useNavigation, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
import { Navigation } from 'swiper';

function Detail() {
  const { slug } = useParams();

  return (
    <>
      <div className='flex'>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='mySwiper h-[670px]'
        >
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='w-full object-contain'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://www.adidas.co.id/media/catalog/product/h/p/hp7629_3_footwear_photography_top20portrait20view_grey.jpg'
              alt=''
              className='h-full w-full'
            />
          </SwiperSlide>
        </Swiper>

        <div className='w-[480px] border border-black p-6'>
          <div>
            <h1 className='text-[2rem] leading-9 font-semi-bold italic'>
              4DFWD 2. Innovated to turn weight into forward motion.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
