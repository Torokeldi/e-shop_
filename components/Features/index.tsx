import React from 'react';
import Image from 'next/image';
import './style.css';
import featuresImg1 from '@/public/assets/Frame 684.png';
import featuresImg2 from '@/public/assets/Frame 685.png';
import featuresImg3 from '@/public/assets/Frame 686.png';
import featuresImg4 from '@/public/assets/Frame 687.png';

const Features: React.FC = () => {
  return (
    <div className="container">
      <div className="features-content">
        <div className="features-header">
          <div className="features-red-box"></div>
          <div className="feature-head-title">Featured</div>
        </div>
        <div className="features-header-bottom">
          <h1 className="features-title">New Arrival</h1>
          <div></div>
        </div>
        <div className="features-grid-content">
          <Image
            className="features-grid-items"
            src={featuresImg1}
            alt="featuresImg1"
          />
          <Image
            className="features-grid-items"
            src={featuresImg2}
            alt="featuresImg2"
          />
          <Image
            className="features-grid-items"
            src={featuresImg3}
            alt="featuresImg3"
          />
          <Image
            className="features-grid-items"
            src={featuresImg4}
            alt="featuresImg4"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
