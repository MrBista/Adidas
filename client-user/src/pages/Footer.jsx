import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
const Footer = () => {
  return (
    <>
      <div className=' bg-black w-fit h-fit rounded-full p-3 fixed bottom-5 right-5 cursor-pointer'>
        <BiMessageDetail className='text-[2rem] text-white' />
      </div>
      <div className='bg-black text-white w-full mt-[10rem] p-[4rem] flex justify-center items-center gap-16'>
        <p className='text-[2rem] w-[450px] leading-7 font-bold'>
          REGISTER YOUR EMAIL FOR NEWS AND SPECIAL OFFERS
        </p>
        <div className='flex gap-4 items-center'>
          <input
            type='text'
            placeholder='Your Email Address'
            className='px-4 py-3 outline-none text-black'
          />
          <BsArrowRight className='text-[2rem] ' />
        </div>
      </div>
      <div className='flex justify-center gap-3 my-11 '>
        <div className='w-52'>
          <div>
            <h4 className='uppercase text-[1.4rem] font-semibold'>Products</h4>
            <ul className='[&>*]:font-light [&>*]:text-[.9rem] leading-6'>
              <li className='mt-5'>Shoes</li>
              <li>Apparels</li>
            </ul>
          </div>
          <div className='mt-4'>
            <h4 className='uppercase text-[1.4rem] font-semibold'>Featured</h4>
            <ul className='[&>*]:font-light [&>*]:text-[.9rem] leading-6'>
              <li className='mt-5'>New Arrivals</li>
              <li>Impossible is nothing</li>
              <li>Exlusion</li>
              <li>Sale</li>
              <li>Last Chance</li>
            </ul>
          </div>
        </div>
        <div className='w-52'>
          <div>
            <h4 className='uppercase text-[1.4rem] font-semibold'>Sport</h4>
            <ul className='[&>*]:font-light [&>*]:text-[.9rem] leading-6'>
              <li className='mt-5'>Predator Football Boots</li>
              <li>X Football Boots</li>
              <li>Copa Football Boots</li>
              <li>Manchester United</li>
              <li>Real Madrid</li>
              <li>Juventus</li>
              <li>Arsenal</li>
              <li>Manchester City</li>
              <li>Bayern Munch</li>
              <li>Boost Shoes</li>
              <li>Ultra Boost</li>
            </ul>
          </div>
        </div>
        <div className='w-52'>
          <div>
            <h4 className='uppercase text-[1.4rem] font-semibold'>
              Collection
            </h4>
            <ul className='[&>*]:font-light [&>*]:text-[.9rem] leading-6 '>
              <li className='mt-5'>Stan Smith</li>
              <li>Superstar</li>
              <li>Ultraboost</li>
              <li>NMD</li>
              <li>adidas Exclusive</li>
            </ul>
          </div>
        </div>
        <div className='w-52'>
          <div className=''>
            <h4 className='uppercase text-[1.4rem] font-semibold'>Legal</h4>
            <ul className='[&>*]:font-light [&>*]:text-[.9rem] leading-6'>
              <li className='mt-5'>Privacy Policy</li>
              <li>Terms and Condition</li>
              <li>Delivery Terms</li>
            </ul>
          </div>
          <div className='mt-4'>
            <h4 className='uppercase text-[1.4rem] font-semibold'>Support</h4>
            <ul className='[&>*]:font-light [&>*]:text-[.9rem] leading-6'>
              <li className='mt-5'>Contact Us</li>
              <li>Size Charts</li>
              <li>Ordering</li>
              <li>Promotions & Vouchers</li>
              <li>Payment</li>
              <li>Delivery</li>
              <li>Returns and Refunds</li>
              <li>About adidas Products</li>
              <li>Using Our Site</li>
              <li>Your Account</li>
              <li>Order Tracker</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#363738] flex justify-center p-4'>
        <div className='w-[900px] flex justify-between'>
          <p className='text-white text-[.8rem] font-light'>Indonesia</p>
          <div className='flex '>
            <p className='text-white text-[.8rem] font-light mr-4'>
              Privacy Policy
            </p>
            <p className='text-white text-[.8rem] font-light'>|</p>
            <p className='text-white text-[.8rem] font-light ml-4'>
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
