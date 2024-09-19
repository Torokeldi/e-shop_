import React from 'react';
import Link from 'next/link';
import './style.css';
import Image from 'next/image';
import googlePicture from '@/public/assets/Icon-Google.png';
import phonePicture from '@/public/assets/dl.beatsnoop 1.png';

function Signup() {
  return (
    <div className="container">
      <div className="signup-content">
        <Image src={phonePicture} alt="phone picture" className="signup-img" />
        <form className="Signup-form">
          <h1 className="Signup-title">Create an account</h1>
          <p>Enter your details below</p>
          <div className="input-fields">
            <input type="text" placeholder="Name" className="Signup-input" />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="Signup-input"
            />
            <input
              type="text"
              placeholder="Password"
              className="Signup-input"
            />
          </div>
          <div className="Signup-form-bottom">
            <button className="Signup-btn">Create Account</button>
            <button className="google-btn">
              <Image src={googlePicture} alt="google" />
              Sign up with Google
            </button>
            <p>
              Already have account? <Link href="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
