import React from 'react';

const RegisterPage = () => {
  return (
    <div class='lg:flex'>
      <div class='hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen'>
        <div class='max-w-7xl transform duration-200 hover:scale-110 cursor-pointer mix-blend-multiply'>
          <img
            src='https://img.freepik.com/free-vector/cyber-security-risk-analysts-team-reduce-risks-cyber-security-management-cyber-security-risk-management-strategy-concept_335657-1828.jpg?w=1060&t=st=1673159222~exp=1673159822~hmac=cf06e6825bb82b4fb3319504496412459cde4f4ace4e624257892d727949c88e'
            alt='dashboard'
            class='w-[100%] mx-auto'
          />
        </div>
      </div>
      <div class='lg:w-1/2 xl:max-w-screen-sm'>
        <div class='py-3 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12'>
          <div class='cursor-pointer flex items-center'>
            <div></div>
            <div class='text-2xl text-indigo-800 tracking-wide ml-2 font-semibold'>
              Dashboard Admin
            </div>
          </div>
        </div>
        <div class='px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mt-40'>
          <h2 class='text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mt-40'>
            Sign Up
          </h2>
          <div class='mt-12'>
            <form>
              <div class='mt-8'>
                <div class='text-sm font-bold text-gray-700 tracking-wide'>
                  Email Address
                </div>
                <input
                  class='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                  type='email'
                  placeholder='name@gmail.com'
                  name='email'
                  v-model='registerForm.email'
                />
              </div>
              <div class='mt-8'>
                <div class='flex justify-between items-center'>
                  <div class='text-sm font-bold text-gray-700 tracking-wide'>
                    Password
                  </div>
                </div>
                <input
                  class='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  v-model='registerForm.password'
                />
              </div>

              <div class='mt-10'>
                <button
                  class='bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg'
                  type='submit'
                >
                  Register
                </button>
              </div>
            </form>

            <div class='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
              Already have an account ?
              <a class='cursor-pointer text-indigo-600 hover:text-indigo-800'>
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
