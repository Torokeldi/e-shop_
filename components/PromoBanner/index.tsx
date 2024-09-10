import React, { useEffect, useState } from 'react';
import promoBanner from '@/public/assets/promo-banner.png';
import Image from 'next/image';
import './style.css';

function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const endDate = new Date('2024-10-29T00:00:00');
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return (
    <div className="container">
      <div className="promo-banner-content">
        <div className="promo-banner-info">
          <p className="promo-banner-description">Categories</p>
          <h1 className="promo-banner-title">Enhance Your Music Experience</h1>
          <div className="timestamp-list">
            <div className="time-item">
              <p>{timeLeft.days.toString().padStart(2, '0')}</p>
              <p>Days</p>
            </div>
            <div className="time-item">
              <p>{timeLeft.hours.toString().padStart(2, '0')}</p>
              <p>Hours</p>
            </div>
            <div className="time-item">
              <p>{timeLeft.minutes.toString().padStart(2, '0')}</p>
              <p>Minutes</p>
            </div>
            <div className="time-item">
              <p>{timeLeft.seconds.toString().padStart(2, '0')}</p>
              <p>Seconds</p>
            </div>
          </div>
          <button>Buy Now</button>
        </div>
        <div className="promo-banner-img">
          <Image src={promoBanner} alt="Promo Banner" />
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
