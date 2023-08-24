import React from 'react';
import dancingGirlImage from '../../src/dancing-girl.png';
import '../App.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={dancingGirlImage} alt="Dancing Girl" className="card-image" />
      </div>
      <div className="follows-capsule">
        <p className="follows-text">100M Follows</p>
      </div>
     </div>
  );
}

export default Card;
