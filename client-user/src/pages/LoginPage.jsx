import React from 'react';

function LoginPage() {
  return (
    <div className='m-auto w-[400px]  mt-8'>
      <div className='flex flex-col items-center gap-y-4'>
        <img
          src='https://www.adidas.co.id/media/logo/adidas-logo.png'
          alt=''
          className='mix-blend-multiply h-9 '
        />
        <h3 className='uppercase text-[1.3rem] w-[250px] leading-tight text-center'>
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h3>
        <form>
          <input
            type='text'
            placeholder='Email address'
            className='border w-full px-4 py-2 outline-none my-2'
          />
          <input
            type='text'
            placeholder='Password'
            className='border w-full px-4 py-2 outline-none my-2'
          />

          <button className='mt-4 bg-black text-white w-full px-4 py-2 rounded'>
            JOIN US
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
