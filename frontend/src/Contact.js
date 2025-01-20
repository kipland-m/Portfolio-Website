import React from 'react';
import './Contact.css';

const ContactPage = () => {
  const contactInfo = [
    { label: 'Email', value: 'kiplandmelton@gmail.com', link: 'mailto:kiplandmelton@gmail.com' },
    { label: 'Twitter', value: '@kiplandvaughn', link: 'https://twitter.com/kiplandvaughn' },
    { label: 'LinkedIn', value: 'Kipland Melton', link: 'https://linkedin.com/in/Kipland-Melton' },
    { label: 'GitHub', value: 'kipland-m', link: 'https://github.com/kipland-m' },
  ];

  return (
    <div className="container">
      <h1 className="heading">Contact Me:</h1>
      <ul className="list">
        {contactInfo.map((item, index) => (
          <li key={index} className="listItem">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="link">
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;

