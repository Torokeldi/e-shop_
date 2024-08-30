'use client';
import Header from '@/components/Header';
import React from 'react';
import Footer from '@/components/Footer';
import HomeReclame from '@/components/HomeReclame';
import FlashSales from '@/components/flashSales/flashSales';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeReclame />
      <FlashSales />
      <Footer />
    </>
  );
};

export default Home;
