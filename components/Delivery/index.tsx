import React from 'react';
import Image from 'next/image';
import './style.css';

const Delivery: React.FC = () => {
  const delivery = [
    {
      img: '/assets/delivery-icon3.svg',
      title: 'FREE AND FAST DELIVERY',
      text: 'Free delivery for all orders over $140',
    },
    {
      img: '/assets/delivery-icon2.svg',
      title: '24/7 CUSTOMER SERVICE',
      text: 'Friendly 24/7 customer support',
    },
    {
      img: '/assets/delivery-icon1.svg',
      title: 'MONEY BACK GUARANTEE',
      text: 'We return money within 30 days',
    },
  ];

  return (
    <div className="container">
      <div className="delivery-content">
        {delivery.map((item, index) => (
          <div key={index} className="delivery-item">
            <div className="gray-round">
              <div className="black-round">
                <Image src={item.img} alt={item.title} width={50} height={50} />
              </div>
            </div>
            <div className="delivery-item-txt">
              <p>{item.title}</p>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
