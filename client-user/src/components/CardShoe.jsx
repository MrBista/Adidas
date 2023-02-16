import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardShoe({ mainImg, name, price, slug }) {
  const navigate = useNavigate();
  const toDetail = (slug) => {
    navigate(`/detail/${slug}`);
  };
  return (
    <div
      className='w-[318px] h-[432px] border rounded overflow-hidden  relative hover:border hover:border-black transition-all ease-linear duration-100 cursor-pointer'
      onClick={() => {
        toDetail(slug);
      }}
    >
      <a href=''>
        <span className='material-symbols-outlined absolute top-2 right-2'>
          favorite
        </span>
      </a>
      <span className='absolute top-4 italic font-light bg-white px-2  left-2 -rotate-90'>
        NEW
      </span>

      <div className='flex flex-col'>
        <img src={mainImg} alt='' className='w-full h-[318px] object-cover' />
        <div className='mt-[.85rem] p-2'>
          <h2 className='text-gray-400 font-light capitalize'>women-sprit</h2>
          <p className='font-light mt-1'>{name}</p>
          <p className='font-light mt-1'>
            {price?.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardShoe;
