'use client';
import React from 'react';
import './style.css';
import Header from '@/components/Header';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <nav aria-label="breadcrumb">
          <div className="breadcrumb">Home / Contact</div>
        </nav>
        <div className="contact-section">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
