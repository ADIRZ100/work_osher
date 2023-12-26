import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="content">
        <p className="italic-text">Call us</p>
        <p className="phone-number">054 - 3234713</p>
        <p className="header-text">Hair Styling</p>
        <p className="italic-text">"Embrace the journey, conquer the challenges, and let your passion for success be the fuel that lights your path to greatness."</p>
        <button className="button">Book Now</button>
      </div>
    </div>
  );
};

export default Hero;
  