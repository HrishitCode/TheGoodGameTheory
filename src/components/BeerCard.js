// src/components/BeerCard.js
import React, { useState } from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => {
  const [isError, setIsError] = useState(false);
  const defaultImage = process.env.PUBLIC_URL + '/default-beer.png';
  const imageUrl = beer.image || defaultImage;

  const handleError = (e) => {
    e.target.onerror = null; 
    e.target.src = defaultImage;
    setIsError(true);
  };

  return (
    <div className="beer-card">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={beer.name}
          className="beer-image"
          onError={handleError}
        />
        {isError && <div className="error-text">Network Error</div>}
      </div>
      <h3>{beer.name}</h3>
      <p>{beer.description}</p>
    </div>
  );
}

export default BeerCard;
