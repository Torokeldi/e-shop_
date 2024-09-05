import React, { useState } from 'react';
import Image from 'next/image';
import arrowLeft from '@/public/assets/arrow_left.svg';
import arrowRight from '@/public/assets/arrow_right.svg';
import './style.css';

const Categories: React.FC = () => {
  const categories = [
    { image: '/assets/Category1.svg', text: 'Phone' },
    { image: '/assets/Category6.svg', text: 'Gaming' },
    { image: '/assets/Category5.svg', text: 'Headphone' },
    { image: '/assets/Category4.svg', text: 'Camera' },
    { image: '/assets/Category2.png', text: 'Computer' },
    { image: '/assets/Category3.svg', text: 'Smartwatch' },
    { image: '/assets/Category5.svg', text: 'Headphone' },
    { image: '/assets/Category1.svg', text: 'Phone' },
    { image: '/assets/Category3.svg', text: 'Smartwatch' },
    { image: '/assets/Category4.svg', text: 'Camera' },
    { image: '/assets/Category6.svg', text: 'Gaming' },
    { image: '/assets/Category2.png', text: 'Computer' },
  ];

  const repeatCount = 99;
  const repeatedCategories = Array.from({ length: repeatCount }).flatMap(
    () => categories,
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const PrevBtn = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? repeatedCategories.length - 1 : prevSlide - 1,
    );
  };

  const NextBtn = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === repeatedCategories.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <div className="container">
      <div className="category-content">
        <div className="category-header">
          <div className="category-red-box"></div>
          <h1 className="category-header-title">Categories</h1>
        </div>
        <div className="category-header-bottom">
          <h1 className="category-title">Browse By Category</h1>
          <div className="icons">
            <div className="icon" onClick={PrevBtn}>
              <Image src={arrowLeft} alt="Arrow Left" />
            </div>
            <div className="icon" onClick={NextBtn}>
              <Image src={arrowRight} alt="Arrow Right" />
            </div>
          </div>
        </div>
        <div className="category-slide-wrapper">
          <div
            className="category-slide"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.3s ease-in-out',
              display: 'flex',
            }}
          >
            {repeatedCategories.map((category, index) => (
              <div
                className="category-item"
                key={index}
                style={{ flex: '0 0 100%' }}
              >
                <Image
                  src={category.image}
                  alt={category.text}
                  layout="responsive"
                  width={100}
                  height={100}
                />
                <p className="category-txt">{category.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
