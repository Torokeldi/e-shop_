import { useState } from 'react';
import Image from 'next/image';
import triangleIcon from '@/public/assets/triangle.png';
import reclame from '@/public/assets/reclame.png';
import './style.css';

const HomeReclame: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="container">
      <section className="home-reclame-content">
        <div className="home-dropdown">
          <div>
            <div className="dropdown-item" onClick={toggleDropdown}>
              <p>Woman’s Fashion</p>
              <Image src={triangleIcon} alt="Dropdown Icon" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <p>Electronics</p>
                <p>Home & Lifestyle</p>
                <p>Medicine</p>
                <p>Sports & Outdoor</p>
                <p>Baby’s & Toys</p>
                <p>Groceries & Pets</p>
                <p>Health & Beauty</p>
              </div>
            )}
          </div>

          <div>
            <div className="dropdown-item" onClick={toggleDropdown}>
              <p>Men’s Fashion</p>
              <Image src={triangleIcon} alt="Dropdown Icon" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <p>Electronics</p>
                <p>Home & Lifestyle</p>
                <p>Medicine</p>
                <p>Sports & Outdoor</p>
                <p>Baby’s & Toys</p>
                <p>Groceries & Pets</p>
                <p>Health & Beauty</p>
              </div>
            )}
          </div>
        </div>
        <Image className="reclame-img" src={reclame} alt="" />
      </section>
    </div>
  );
};

export default HomeReclame;
