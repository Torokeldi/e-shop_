import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './style.css';
import phonePicture from '@/public/assets/dl.beatsnoop 1.png';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Login() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="Login-content">
          <Image src={phonePicture} alt="phone picture" className="Login-img" />
          <form className="Login-form">
            <h1 className="Login-title">Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="Login-input"
              />
              <input
                type="text"
                placeholder="Password"
                className="Login-input"
              />
            </div>
            <div className="Login-form-bottom">
              <button className="Login-btn">Log In</button>
              <Link href="#">Forgot Password ?</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
