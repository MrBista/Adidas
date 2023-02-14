import React from 'react';
import Aside from './components/Aside';
import Navbar from './components/Navbar';
import AddCategories from './pages/AddCategories';
import AddProduct from './pages/AddProduct';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Products from './pages/Products';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='flex'>
          <main className='flex-1 ml-64 py-4 px-6'>
            <Aside />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/add-product' element={<AddProduct />} />
              <Route path='/add-category' element={<AddCategories />} />
            </Routes>
          </main>
        </div>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
