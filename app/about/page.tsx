'use client';
import React from 'react';
import './style.css';
import Header from '@/components/Header';
import Delivery from '@/components/Delivery';
import AboutPageTop from '@/components/AboutPageTop';
import AboutPageFrames from '@/components/AboutPageFrames';
import AboutPagePersons from '@/components/AboutPagePersons';
import Footer from '@/components/Footer';

function About() {
  return (
    <>
      <Header />
      <div className="container">
        <nav aria-label="breadcrumb">
          <div className="breadcrumb">Home / About</div>
        </nav>
        <div className="about-section">
          <AboutPageTop />
          <AboutPageFrames />
          <AboutPagePersons />
          <Delivery />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
