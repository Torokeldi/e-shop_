import Image from 'next/image';
import React from 'react';
import aboutImg from '@/public/assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png';
import './style.css';

function AboutPageTop() {
  return (
    <div className="about-page-top-content">
      <div className="our-story">
        <h1>Our Story</h1>
        <div className="txt-section">
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>
      <Image className="about-top-img" src={aboutImg} alt="Our Story" />
    </div>
  );
}

export default AboutPageTop;
