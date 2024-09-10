import React from 'react';
import Image from 'next/image';
import './style.css';
import heartIcon from '@/public/assets/heart.svg';
import starsIcon from '@/public/assets/stars_icon.svg';
import eyeIcon from '@/public/assets/eye_icon.svg';
import coatImage from '@/public/assets/coat.png';
import bagImage from '@/public/assets/bag.png';
import coolerImage from '@/public/assets/cooler.png';
import bookselfImage from '@/public/assets/bookself.png';

const products = [
  {
    name: 'The North Coat',
    price: '$460',
    oldPrice: '$360',
    image: coatImage,
    reviews: 65,
  },
  {
    name: 'Gucci Duffle Bag',
    price: '$260',
    oldPrice: '$363',
    image: bagImage,
    reviews: 65,
  },
  {
    name: 'RGB Liquid CPU Cooler',
    price: '$230',
    oldPrice: '$360',
    image: coolerImage,
    reviews: 65,
  },
  {
    name: 'Small BookShelf',
    price: '$263',
    image: bookselfImage,
    reviews: 65,
  },
];

function Promotion() {
  return (
    <div className="container">
      <div className="promotion-content">
        <div className="promotion-header">
          <div className="promotion-info">
            <div className="promotion-red-box"></div>
            <p>This Month</p>
          </div>
          <div className="promotion-header-bottom">
            <h1 className="promotion-title">Best Selling Products</h1>
            <button className="promotion-btn">View All</button>
          </div>
        </div>
        <div className="promotion-cards">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-container">
                <div className="promotion-icon-group">
                  <div className="promotion-icon">
                    <Image src={heartIcon} alt="Favorite Icon" />
                  </div>
                  <div className="promotion-icon">
                    <Image src={eyeIcon} alt="View Icon" />
                  </div>
                </div>
                <div className="product-main-image">
                  <Image src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <div className="product-price-row">
                  <p className="product-price">{product.price}</p>
                  <p className="product-old-price">{product.oldPrice}</p>
                </div>
                <div className="product-rating">
                  <Image
                    className="rating-stars"
                    src={starsIcon}
                    alt="rating"
                  />
                  <p className="review-count">({product.reviews})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promotion;
