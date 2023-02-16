import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import CardShoeHome from '../components/CardShoeHome';
import './style.css';

function HomePage() {
  return (
    <>
      <div className='mb-2'>
        <div className="bg-[url('https://www.adidas.co.id/media/scandiweb/slider/i/v/ivy-park-trail-mh-with-logo.png')] h-[80vh] w-full bg-no-repeat relative">
          <div className='absolute top-[55%] left-[10rem] text-white'>
            <p className='font-bold text-[3rem]'>PARK TRAIL</p>
            <button className='bg-white text-black px-4 py-3 w-[200px] flex justify-between items-center btn-bag-home mt-5'>
              <span className='uppercase'>Shop Now</span>
              <span>
                <BsArrowRight className='text-[2rem]' />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <div className="bg-[url('https://www.adidas.co.id/media/scandiweb/slider/t/i/tiro-mh-2-.jpg')] h-[75vh] w-full bg-no-repeat relative">
          <div className='absolute top-[55%] left-[10rem] text-white'>
            <p className='font-semibold text-[2.6rem]'>adidas Sportswear</p>
            <p className='w-[400px] font-light'>
              The You-niform.Sportwear born on the pitch, reimagined for
              everyday
            </p>
            <button className='bg-white text-black px-4 py-3 w-[250px] flex justify-between items-center btn-bag-home mt-5'>
              <span className='uppercase'>Shop Collection</span>
              <span>
                <BsArrowRight className='text-[2rem]' />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-[95vw] m-auto '>
        <h3 className='capitalize text-3xl'>What'S HOT</h3>
        <div className='flex flex-wrap gap-3 justify-center'>
          <CardShoeHome />
        </div>
      </div>
      <div className='w-[95vw] m-auto '>
        <h2 className='text-center mt-[5rem] text-[2rem] font-semibold'>
          Best Of Adidas
        </h2>
        <div className='flex flex-wrap gap-3 justify-center'>
          <div className='w-[257px] border rounded overflow-hidden shadow-md relative hover:border hover:border-black transition-all ease-linear duration-100 cursor-pointer'>
            <a href=''>
              <span class='material-symbols-outlined absolute top-2 right-2'>
                favorite
              </span>
            </a>

            <div className='flex flex-col'>
              <img
                src='https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/p/hp7878_2_footwear_photography_side20lateral20view_grey.jpg'
                alt=''
                className='w-full h-[255px] object-cover'
              />
              <div className='mt-[.85rem] p-2'>
                <h2 className='text-gray-400 font-light capitalize'>
                  Unisex Golf
                </h2>
                <p className='font-light mt-3'>
                  4DFWD 2. Innovated to turn weight into forward motion.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[257px] border rounded overflow-hidden shadow-md relative hover:border hover:border-black transition-all ease-linear duration-100 cursor-pointer'>
            <a href=''>
              <span class='material-symbols-outlined absolute top-2 right-2'>
                favorite
              </span>
            </a>

            <div className='flex flex-col'>
              <img
                src='https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/p/hp7878_2_footwear_photography_side20lateral20view_grey.jpg'
                alt=''
                className='w-full h-[255px] object-cover'
              />
              <div className='mt-[.85rem] p-2'>
                <h2 className='text-gray-400 font-light capitalize'>
                  Unisex Golf
                </h2>
                <p className='font-light mt-3'>
                  4DFWD 2. Innovated to turn weight into forward motion.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[257px] border rounded overflow-hidden shadow-md relative hover:border hover:border-black transition-all ease-linear duration-100 cursor-pointer'>
            <a href=''>
              <span class='material-symbols-outlined absolute top-2 right-2'>
                favorite
              </span>
            </a>

            <div className='flex flex-col'>
              <img
                src='https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/p/hp7878_2_footwear_photography_side20lateral20view_grey.jpg'
                alt=''
                className='w-full h-[255px] object-cover'
              />
              <div className='mt-[.85rem] p-2'>
                <h2 className='text-gray-400 font-light capitalize'>
                  Unisex Golf
                </h2>
                <p className='font-light mt-3'>
                  4DFWD 2. Innovated to turn weight into forward motion.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[257px] border rounded overflow-hidden shadow-md relative hover:border hover:border-black transition-all ease-linear duration-100 cursor-pointer'>
            <a href=''>
              <span class='material-symbols-outlined absolute top-2 right-2'>
                favorite
              </span>
            </a>

            <div className='flex flex-col'>
              <img
                src='https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/p/hp7878_2_footwear_photography_side20lateral20view_grey.jpg'
                alt=''
                className='w-full h-[255px] object-cover'
              />
              <div className='mt-[.85rem] p-2'>
                <h2 className='text-gray-400 font-light capitalize'>
                  Unisex Golf
                </h2>
                <p className='font-light mt-3'>
                  4DFWD 2. Innovated to turn weight into forward motion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
