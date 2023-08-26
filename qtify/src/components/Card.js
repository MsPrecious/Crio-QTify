import React from 'react';
import '../App.css';

const Card = ({ imageSrc, followsText }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageSrc} alt="album cover" className="card-image" />
      </div>
      <div className="follows-capsule">
        <p className="follows-text">{followsText}</p>
      </div>
    </div>
  );
}

export default Card;
