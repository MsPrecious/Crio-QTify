import React from 'react';
import vibratingHeadphoneImage from '../vibrating-headphone.png'; // Import the logo image
import Card from './Card'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="text-container">
          <p className="first-line">
            100 Thousand Songs, ad-free
          </p>
          <p className="second-line">
            Over thousands podcast episodes
          </p>
        </div>
        <div className="logo-container">
          <img
            src={vibratingHeadphoneImage} // Use the imported logo image
            alt="vibrating-headphone"
            className="hero-logo"
          />
        </div>
      </div>
      <div className="card-section">
        <Card />
      </div>

    </div>
  );
};

export default HeroSection;






