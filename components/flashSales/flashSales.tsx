import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import arrowLeft from '@/public/assets/arrow_left.svg';
import arrowRight from '@/public/assets/arrow_right.svg';
import heartIcon from '@/public/assets/heart.svg';
import starsIcon from '@/public/assets/stars_icon.svg';
import eyeIcon from '@/public/assets/eye_icon.svg';
import './flashSale.css';

const FlashSales: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      discount: '-45%',
      img: '/assets/product1.png',
      currentPrice: 123,
      originalPrice: 223,
      reviewCount: 66,
    },
    {
      name: 'AK-900 Wired Keyboard',
      discount: '-35%',
      img: '/assets/product2.png',
      currentPrice: 234,
      originalPrice: 359,
      reviewCount: 77,
    },
    {
      name: 'IPS LCD Gaming Monitor',
      discount: '-46%',
      img: '/assets/product3.png',
      currentPrice: 678,
      originalPrice: 1250,
      reviewCount: 45,
    },
    {
      name: 'S-Series Comfort Chair',
      discount: '-89%',
      img: '/assets/product4.png',
      currentPrice: 543,
      originalPrice: 1020,
      reviewCount: 67,
    },
    {
      name: 'Acer Laptop',
      discount: '-34%',
      img: '/assets/product5.svg',
      currentPrice: 456,
      originalPrice: 690,
      reviewCount: 90,
    },
  ];

  const repeatCount = 99;
  const repeatedProducts = Array.from({ length: repeatCount }).flatMap(
    () => products,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const endDate = new Date('2024-12-01T00:00:00');
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    if (difference < 0) {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  const PrevBtn = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? repeatedProducts.length - 1 : prevSlide - 1,
    );
  };

  const NextBtn = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === repeatedProducts.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <div className="container">
      <div className="flash-sale-content">
        <div className="flash-sale-header">
          <div className="sale-info">
            <div className="red-box"></div>
            <p>Today’s</p>
          </div>
          <div className="flash-sale-header-bottom">
            <h1 className="sale-title">Flash Sales</h1>
            <div className="countdown-timer">
              <div className="time-unit">
                <p className="timer-title">Days</p>
                <p className="unitValue">
                  {timeLeft.days.toString().padStart(2, '0')}
                </p>
              </div>
              <p className="divider">:</p>
              <div className="time-unit">
                <p className="timer-title">Hours</p>
                <p className="unitValue">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </p>
              </div>
              <p className="divider">:</p>
              <div className="time-unit">
                <p className="timer-title">Minutes</p>
                <p className="unitValue">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </p>
              </div>
              <p className="divider">:</p>
              <div className="time-unit">
                <p className="timer-title">Seconds</p>
                <p className="unitValue">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </p>
              </div>
            </div>
            <div className="icons">
              <div className="icon" onClick={PrevBtn}>
                <Image src={arrowLeft} alt="Arrow Left" />
              </div>
              <div className="icon" onClick={NextBtn}>
                <Image src={arrowRight} alt="Arrow Right" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="products-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {repeatedProducts.map((product, index) => (
            <div className="productList" key={index}>
              <div className="productCard">
                <div className="productImageWrapper">
                  <div className="productDiscount">{product.discount}</div>
                  <div className="productImage-icons">
                    <Image
                      src={product.img}
                      alt={product.name}
                      className="productImage"
                      width={200}
                      height={200}
                    />
                    <div className="productIcons">
                      <div className="icon">
                        <Image src={heartIcon} alt="Favorite Icon" />
                      </div>
                      <div className="icon">
                        <Image src={eyeIcon} alt="View Icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productDetails">
                  <p className="productName">{product.name}</p>
                  <div className="productPricing">
                    <p className="currentPrice">${product.currentPrice}</p>
                    <p className="originalPrice">${product.originalPrice}</p>
                  </div>
                  <div className="productReviews">
                    <Image src={starsIcon} alt="Star Rating" />
                    <p className="reviewCount">({product.reviewCount})</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="ViewBtn">View All Products</button>
      </div>
    </div>
  );
};

export default FlashSales;
