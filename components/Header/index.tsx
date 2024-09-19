import React from 'react';
import Image from 'next/image';
import heartIcon from '@/public/assets/heart.svg';
import targetIcon from '@/public/assets/cart.svg';
import seachIcon from '@/public/assets/search.svg';
import './style.css';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="logo-text">Exclusive</h1>
        <div className="header-menu">
          <Link href="/" className="menu-items">
            Home
          </Link>
          <Link href="/contacts" className="menu-items">
            Contact
          </Link>
          <Link href="/about" className="menu-items">
            About
          </Link>
          <Link href="/auth" className="menu-items">
            Sign Up
          </Link>
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
