import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from './Footer';

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
