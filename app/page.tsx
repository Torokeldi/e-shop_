'use client';
import Header from '@/components/Header';
import React from 'react';
import Footer from '@/components/Footer';
import HomeReclame from '@/components/HomeReclame';
import FlashSales from '@/components/flashSales';
import Categories from '@/components/Categories';
import Delivery from '@/components/Delivery';
import Features from '@/components/Features';
import Promotion from '@/components/Promotion';
import PromoBanner from '@/components/PromoBanner';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeReclame />
      <FlashSales />
      <Categories />
      <Promotion />
      <PromoBanner />
      <Features />
      <Delivery />
      <Footer />
    </>
  );
};

export default Home;
