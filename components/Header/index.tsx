import React from 'react';
import Image from 'next/image';
import heartIcon from '@/public/assets/heart.svg';
import targetIcon from '@/public/assets/cart.svg';
import seachIcon from '@/public/assets/search.svg';
import './style.css';

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="logo-text">Exclusive</h1>
        <div className="header-menu">
          <a className="menu-items">Home</a>
          <a href="#" className="menu-items">
            Contact
          </a>
          <a href="#" className="menu-items">
            About
          </a>
          <a href="#" className="menu-items">
            Sign Up
          </a>
        </div>

        <div className="search-and-icons">
          <div className="search-bar">
            <input
              className="search-field"
              placeholder="What are you looking for?"
            />
            <Image className="search-icon" src={seachIcon} alt="icon" />
          </div>
          <div className="header-icons">
            <Image className="header-icon-item" src={heartIcon} alt="icon" />
            <Image className="header-icon-item" src={targetIcon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
