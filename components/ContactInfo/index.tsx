import Image from 'next/image';
import phoneIcon from '@/public/assets/icons-phone.png';
import emailIcon from '@/public/assets/icons-mail.png';
import React from 'react';
import './style.css';

function ContactInfo() {
  return (
    <div className="contact-info-content">
      <div className="contact-item">
        <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
        <p>Call To Us</p>
      </div>
      <p className="contact-txt">We are available 24/7, 7 days a week.</p>
      <p className="contact-txt">Phone: +8801611112222</p>
      <div className="line" />
      <div className="contact-item">
        <Image src={emailIcon} alt="Email Icon" width={24} height={24} />
        <p>Write to Us</p>
      </div>
      <p className="contact-txt">
        Fill out our form and we will contact you within 24 hours.
      </p>
      <p className="contact-txt">Emails: customer@exclusive.com</p>
      <p className="contact-txt">Emails: support@exclusive.com</p>
    </div>
  );
}

export default ContactInfo;
