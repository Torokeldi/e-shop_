import Image from 'next/image';
import React from 'react';
import './style.css';

function AboutPageFrames() {
  const sampleIndex = [
    {
      name: 'Sellers',
      img: '/assets/index004.svg',
      countTitle: '10.5k',
      text: 'Sellers active on our site',
    },
    {
      name: 'Products',
      img: '/assets/index003.svg',
      countTitle: '33k',
      text: 'Monthly Product Sales',
    },
    {
      name: 'Customers',
      img: '/assets/index002.svg',
      countTitle: '45.5k',
      text: 'Customers active on our site',
    },
    {
      name: 'Sales',
      img: '/assets/index001.svg',
      countTitle: '25k',
      text: 'Annual gross sales on our site',
    },
  ];

  return (
    <div className="frames-content">
      {sampleIndex.map((item, index) => (
        <div key={index} className="frames-item">
          <div className="gray-round">
            <div className="black-round">
              <Image src={item.img} alt={item.name} width={50} height={50} />
            </div>
          </div>
          <h1>{item.countTitle}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutPageFrames;
