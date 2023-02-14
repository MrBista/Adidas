import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Detail from './pages/Detail';

function App() {
  return (
    <div className='bg-white h-[100vh]'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route path='/products' element={<ProductPage />} />
            <Route path='/detail/:slug' element={<Detail />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
