import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <Link href="/" legacyBehavior>
            <a>
              <Image src={logo} alt="Logo" width={50} height={50} />
            </a>
          </Link>
          <span className="ml-2 text-xl font-bold">My Shop</span>
        </div>
        <nav>
          <Link href="/login" legacyBehavior>
            <a className="text-lg">Login</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
