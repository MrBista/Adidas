import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormUser = ({ login }) => {
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (e) => {
    setUserForm((prevVal) => {
      const newUsers = {
        ...prevVal,
        id: new Date().getMilliseconds().toString(),
      };
      return { ...newUsers, [e.target.name]: e.target.value };
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForm),
      });
      if (!response.ok) {
        throw new Error(response.text());
      }
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='lg:flex'>
        <div className='hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen'>
          <div className='max-w-7xl transform duration-200 hover:scale-110 cursor-pointer mix-blend-multiply'>
            <img
              src={
                login
                  ? 'https://img.freepik.com/free-vector/access-control-system-abstract-concept-illustration_335657-1875.jpg?w=740&t=st=1674442261~exp=1674442861~hmac=21bb0e4b7c70769d1a163b807b099b1c3842ebebb7cc48fb4ff8c792e2918ff5'
                  : 'https://img.freepik.com/free-vector/cyber-security-risk-analysts-team-reduce-risks-cyber-security-management-cyber-security-risk-management-strategy-concept_335657-1828.jpg?w=1060&t=st=1673159222~exp=1673159822~hmac=cf06e6825bb82b4fb3319504496412459cde4f4ace4e624257892d727949c88e'
              }
              alt='dashboard'
              className='w-[100%] mx-auto'
            />
          </div>
        </div>
        <div className='lg:w-1/2 xl:max-w-screen-sm'>
          <div className='py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12'>
            <div className='cursor-pointer flex items-center'>
              <div></div>
              <div className='text-2xl text-indigo-800 tracking-wide ml-2 font-semibold'>
                Dashboard {login ? 'login' : 'register'}
              </div>
            </div>
          </div>
          <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl'>
            <h2 className='text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mt-20'>
              {login ? 'Log in' : 'Register'}
            </h2>
            <div className='mt-12 relative'>
              <form onSubmit={handleRegister}>
                {!login && (
                  <div>
                    <div className='text-sm font-bold text-gray-700 tracking-wide'>
                      username
                    </div>
                    <input
                      className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                      type='text'
                      placeholder='joe doe'
                      name='username'
                      value={userForm.username}
                      onChange={handleChange}
                    />
                  </div>
                )}
                <div className={!login && 'mt-8'}>
                  <div className='text-sm font-bold text-gray-700 tracking-wide'>
                    Email Address
                  </div>
                  <input
                    className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                    type='email'
                    placeholder='name@gmail.com'
                    name='email'
                    value={userForm.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='mt-8'>
                  <div className='flex justify-between items-center'>
                    <div className='text-sm font-bold text-gray-700 tracking-wide'>
                      Password
                    </div>
                    {login && (
                      <div>
                        <a className='text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer'>
                          Forgot Password?
                        </a>
                      </div>
                    )}
                  </div>
                  <input
                    className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    onChange={handleChange}
                    value={userForm.password}
                  />
                </div>
                <div className='mt-10'>
                  <button
                    className='bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg'
                    type='submit'
                  >
                    {login ? 'Login' : 'Register'}
                  </button>
                </div>
              </form>
              <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
                {login ? "Don't have an account ?" : 'Already have an account?'}
                <Link
                  to={login ? '/register' : '/login'}
                  className='cursor-pointer text-indigo-600 hover:text-indigo-800'
                >
                  {login ? 'Sign up' : 'Sign in'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUser;
