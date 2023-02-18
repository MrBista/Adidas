import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FormUser = ({ registerPage }) => {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    userName: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (e) => {
    setUserForm((prevVal) => {
      return { ...prevVal, [e.target.name]: e.target.value };
    });
  };

  const handelFormUser = async (e) => {
    e.preventDefault();
    if (!registerPage) {
      try {
        setIsLoading(true);
        const res = await fetch(import.meta.env.VITE_APP_URL + '/login', {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userForm),
          method: 'post',
        });
        if (!res.ok) {
          throw await res.text();
        }
        const resJson = await res.json();
        console.log(resJson, '===== access token');
        localStorage.setItem('access_token', resJson.access_token);
        navigate('/');
      } catch (err) {
        setErrMsg(JSON.parse(err).message);
      }
    } else {
      try {
        setIsLoading(true);
        const res = await fetch(import.meta.env.VITE_APP_URL + '/register', {
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(userForm),
          method: 'post',
        });
        if (!res.ok) {
          throw await res.text();
        }
        const resJson = await res.json();

        navigate('/');
      } catch (err) {
        setErrMsg(JSON.parse(err).message);
      }
    }
  };

  return (
    <>
      <div className='m-auto w-[400px]  mt-[7rem]'>
        <div className='flex flex-col items-center gap-y-4'>
          <img
            src='https://www.adidas.co.id/media/logo/adidas-logo.png'
            alt=''
            className='mix-blend-multiply h-9 '
          />
          <h3 className='uppercase text-[1.3rem] w-[250px] leading-tight text-center'>
            {registerPage
              ? 'Create Another Admin For Adidas'
              : 'Login For only Admin'}
          </h3>
          {errMsg && <p className='text-red-500 text-lg text-left'>{errMsg}</p>}
          <form onSubmit={handelFormUser}>
            <input
              type='text'
              placeholder='Email address'
              className='border w-full px-4 py-2 outline-none my-2'
              name='email'
              value={userForm.email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              className='border w-full px-4 py-2 outline-none my-2'
              name='password'
              value={userForm.password}
              onChange={handleChange}
            />
            {registerPage && (
              <input
                type='text'
                placeholder='username'
                className='border w-full px-4 py-2 outline-none my-2'
                name='userName'
                value={userForm.userName}
                onChange={handleChange}
              />
            )}
            {registerPage && (
              <input
                type='text'
                placeholder='First Name'
                className='border w-full px-4 py-2 outline-none my-2'
                name='firstName'
                value={userForm.firstName}
                onChange={handleChange}
              />
            )}
            {registerPage && (
              <input
                type='text'
                placeholder='Last Name'
                className='border w-full px-4 py-2 outline-none my-2'
                name='lastName'
                value={userForm.lastName}
                onChange={handleChange}
              />
            )}

            <button className='mt-4 bg-black text-white w-full px-4 py-2 rounded'>
              {registerPage ? 'Register' : ' Login'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormUser;
