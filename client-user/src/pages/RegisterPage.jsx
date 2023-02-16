import React, { useState } from 'react';

function RegisterPage() {
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });
  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForm),
      });
      if (!res.ok) {
        throw new Error(res.text());
      }
      setUserForm({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        dateOfBirth: '',
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='m-auto w-[400px]  mt-8'>
      <div className='flex flex-col items-center gap-y-4'>
        <img
          src='https://www.adidas.co.id/media/logo/adidas-logo.png'
          alt=''
          className='mix-blend-multiply h-9 '
        />
        <h3 className='uppercase text-[1.3rem]'>Become An Adidas Member</h3>
        <p className='text-center font-light text-gray-500'>
          Create your Adidas Member profile and get first access to the very
          best of Adidas products, inspiration and community.
        </p>
        <form onSubmit={handleRegister}>
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
          <input
            type='text'
            placeholder='First Name'
            className='border w-full px-4 py-2 outline-none my-2'
            name='firstName'
            value={userForm.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Last Name'
            className='border w-full px-4 py-2 outline-none my-2'
            name='lastName'
            value={userForm.lastName}
            onChange={handleChange}
          />
          <input
            type='date'
            placeholder='Date of Birth'
            className='border w-full px-4 py-2 outline-none my-2'
            name='dateOfBirth'
            value={userForm.dateOfBirth}
            onChange={handleChange}
          />
          <button className='mt-4 bg-black text-white w-full px-4 py-2 rounded'>
            JOIN US
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
