import { useState } from 'react';
import Image from 'next/image';
import triangleIcon from '@/public/assets/triangle.png';
import reclame from '@/public/assets/reclame.png';
import './style.css';

const dropdownData = [
  { id: 'women', label: 'Woman’s Fashion' },
  { id: 'men', label: 'Men’s Fashion' },
];

const dropdownContent = (
  <>
    <p>Electronics</p>
    <p>Home & Lifestyle</p>
    <p>Medicine</p>
    <p>Sports & Outdoor</p>
    <p>Baby’s & Toys</p>
    <p>Groceries & Pets</p>
    <p>Health & Beauty</p>
  </>
);

const HomeReclame: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="container">
      <section className="home-reclame-content">
        <div className="home-dropdown">
          {dropdownData.map(({ id, label }) => (
            <div key={id}>
              <div className="dropdown-item" onClick={() => toggleDropdown(id)}>
                <p>{label}</p>
                <Image src={triangleIcon} alt="Dropdown Icon" />
              </div>
              {activeDropdown === id && (
                <div className="dropdown-content">{dropdownContent}</div>
              )}
            </div>
          ))}
        </div>
        <Image className="reclame-img" src={reclame} alt="reclame" />
      </section>
    </div>
  );
};

export default HomeReclame;
