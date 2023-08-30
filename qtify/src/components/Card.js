import React from 'react';
import '../App.css';

const Card = ({ imageSrc, followsText, albumTitle }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageSrc} alt="album cover" className="card-image" />
        <div className="follows-capsule">
          <p className="follows-text">{followsText}</p>
        </div>
      </div>
      <p className="outside-text">{albumTitle}</p>
    </div>
  );
}

export default Card;
