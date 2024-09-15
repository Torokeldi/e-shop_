import React from 'react';
import personImg from '@/public/assets/image 46.png';
import Image from 'next/image';
import twitter from '@/public/assets/twitter2.svg';
import instagram from '@/public/assets/instagram2.svg';
import linkedin from '@/public/assets/linkedin2.svg';
import './style.css';

function AboutPagePersons() {
  const persons = [
    {
      img: personImg,
      name: 'John Doe',
      personJob: 'Software Engineer',
      socialContact: {
        instagram: 'https://instagram.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      img: personImg,
      name: 'Jack Smith',
      personJob: 'Product Manager',
      socialContact: {
        instagram: 'https://instagram.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    {
      img: personImg,
      name: 'Mike Johnson',
      personJob: 'UX Designer',
      socialContact: {
        instagram: 'https://instagram.com/mikejohnson',
        linkedin: 'https://linkedin.com/in/mikejohnson',
        twitter: 'https://twitter.com/mikejohnson',
      },
    },
  ];

  return (
    <div className="about-page-persons">
      {persons.map((person, index) => (
        <div key={index} className="person-card">
          <div className="person-img-box">
            <Image
              src={person.img}
              alt={person.name}
              className="person-image"
            />
          </div>
          <h3>{person.name}</h3>
          <p>{person.personJob}</p>
          <div className="social-links">
            <a
              href={person.socialContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagram} alt="instagram" />
            </a>
            <a
              href={person.socialContact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt="linkedin" />
            </a>
            <a
              href={person.socialContact.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutPagePersons;
