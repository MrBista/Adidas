import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { getShoes } from '../redux/action/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { useEffect } from 'react';
import CardShoe from '../components/CardShoe';
import Loader from './Loader';

function HomePage() {
  const { isLoading, data, errorMsg } = useSelector((state) => {
    return state.shoes;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoes());
  }, []);
  if (isLoading) {
    return <Loader />;
  }

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
        <h3 className='capitalize text-3xl ml-[9rem] my-5'>What'S HOT</h3>
        <div className='w-[90vw] max-w-[1368px] m-auto mt-4'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {data.map((el) => {
              return <CardShoe {...el} isHome />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
