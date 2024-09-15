import React from 'react';
import './style.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="contact-inputs">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="phone" placeholder="Your Phone" />
      </div>
      <textarea
        name="contact message"
        id="contactMessage"
        placeholder="Your Message"
      ></textarea>
      <button className="submit-btn" type="submit">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
