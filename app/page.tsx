'use client';
import Header from '@/components/Header';
import React from 'react';
import Footer from '@/components/Footer';
import HomeReclame from '@/components/HomeReclame';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeReclame />
      <Footer />
    </>
  );
};

export default Home;
