'use client';
import Header from '@/components/Header';
import React from 'react';
import Footer from '@/components/Footer';
import HomeReclame from '@/components/HomeReclame';
import FlashSales from '@/components/flashSales';
import Categories from '@/components/Categories';
import Delivery from '@/components/Delivery';
import Features from '@/components/Features';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeReclame />
      <FlashSales />
      <Categories />
      <Features />
      <Delivery />
      <Footer />
    </>
  );
};

export default Home;
