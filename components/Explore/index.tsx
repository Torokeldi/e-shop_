import Image from 'next/image';
import React from 'react';
import heartIcon from '@/public/assets/heart.svg';
import starsIcon from '@/public/assets/stars_icon.svg';
import eyeIcon from '@/public/assets/eye_icon.svg';
import arrowLeft from '@/public/assets/arrow_left.svg';
import arrowRight from '@/public/assets/arrow_right.svg';

import './style.css';

const products = [
  {
    img: '/assets/product11.png',
    name: 'Breed Dry Dog Food',
    price: '$109',
    reviewCount: '(259)',
  },
  {
    img: '/assets/product12.png',
    name: 'CANON EOS DSLR Camera',
    price: '$206',
    reviewCount: '(306)',
  },
  {
    img: '/assets/product13.png',
    name: 'ASUS FHD Gaming Laptop',
    price: '$160',
    reviewCount: '(265)',
  },
  {
    img: '/assets/product14.png',
    name: 'Curology Product Set',
    price: '$210',
    reviewCount: '(310)',
  },
  {
    img: '/assets/product15.png',
    name: 'Kids Electric Car',
    price: '$910',
    reviewCount: '(295)',
  },
  {
    img: '/assets/product16.png',
    name: 'Jr. Zoom Soccer Cleats',
    price: '$208',
    reviewCount: '(830)',
  },
  {
    img: '/assets/product17.png',
    name: 'GP11 Shooter USB Gamepad',
    price: '$190',
    reviewCount: '(259)',
  },
  {
    img: '/assets/product18.png',
    name: 'Quilted Satin Jacket',
    price: '$202',
    reviewCount: '(320)',
  },
];

function Explore() {
  return (
    <div className="container">
      <div className="explore-content">
        <div className="explore-header">
          <div className="explore-header-top">
            <div className="explore-red-box"></div>
            <p>Our Products</p>
          </div>
          <div className="explore-header-bottom">
            <h1 className="explore-title">Explore Our Products</h1>
            <div className="icons">
              <div className="icon" aria-label="Previous Product">
                <Image src={arrowLeft} alt="arrow left" />
              </div>
              <div className="icon" aria-label="Next Product">
                <Image src={arrowRight} alt="arrow right" />
              </div>
            </div>
          </div>
        </div>
        <div className="explore-cards">
          {products.map((item, index) => (
            <div className="explore-card" key={index}>
              <div className="card-image-bar">
                <div className="card-icons">
                  <Image src={heartIcon} alt="Add to Favorites" />
                  <Image src={eyeIcon} alt="View Details" />
                </div>
                <Image
                  src={item.img}
                  alt={item.name}
                  className="card-img"
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-info-bar">
                <p className="card-name">{item.name}</p>
                <div className="info-bar-bottom">
                  <p className="price-count">{item.price}</p>
                  <Image src={starsIcon} alt="Rating Stars" />
                  <p className="review-count">{item.reviewCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
