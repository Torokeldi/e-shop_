/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React from 'react';
import './style.css';
import arrowIcon from '../../public/assets/arrow-right.svg';
import googlePlayBadge from '../../public/assets/google-store.png';
import appStoreBadge from '../../public/assets/AppStore.png';
import qrCode from '../../public/assets/Qrcode 1.png';
import facebookIcon from '../../public/assets/facebook.svg';
import twitterIcon from '../../public/assets/twitter.svg';
import instagramIcon from '../../public/assets/instagram.svg';
import linkedinIcon from '../../public/assets/linkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-list">
            <h1 className="footer-logo">Exclusive</h1>
            <b>Subscribe</b>
            <p>Get 10% off your first order</p>
            <div className="footer-input">
              <input type="email" placeholder="Enter your email" />
              <Image src={arrowIcon} alt="icon" />
            </div>
          </div>
          <div className="footer-list">
            <h1 className="footer-titles">Support</h1>
            <p style={{ width: '175px' }}>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="footer-list">
            <h1 className="footer-titles">Account</h1>
            <a href="#">My Account</a>
            <a href="#">Login / Register</a>
            <a href="#">Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Shop</a>
          </div>
          <div className="footer-list">
            <h1 className="footer-titles">Quick Link</h1>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-list">
            <h1>Download App</h1>
            <p>Save $3 with App New User Only</p>
            <div className="qrcode-appstore">
              <Image src={qrCode} alt="icon" className="qr-code" />
              <div className="appstore-googleplay">
                <Image src={googlePlayBadge} alt="icon" />
                <Image src={appStoreBadge} alt="icon" />
              </div>
            </div>
            <div className="social-buttons">
              <a href="#">
                <Image src={facebookIcon} alt="icon" />
              </a>
              <a href="#">
                <Image src={twitterIcon} alt="icon" />
              </a>
              <a href="#">
                <Image src={instagramIcon} alt="icon" />
              </a>
              <a href="#">
                <Image src={linkedinIcon} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
