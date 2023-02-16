import React from 'react';

function CardShoeHome() {
  return (
    <>
      <div className='w-[328px] rounded overflow-hidden shadow-md'>
        <div className='flex flex-col'>
          <img
            src='https://www.adidas.co.id/media/running-ss23-4dfwd-ccm-launch-hp-teaser-carousel-m-m.jpg'
            alt=''
            className='w-[328px] h-[438px] object-cover'
          />
          <div className='mt-[.85rem] p-4'>
            <h2 className='font-bold'>FORWARD MOTION REDEFINED</h2>
            <p className='font-light mt-3'>
              4DFWD 2. Innovated to turn weight into forward motion.
            </p>
            <p className='mt-4 underline uppercase cursor-pointer'>shop now</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardShoeHome;
