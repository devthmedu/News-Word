// ContentCard.js
import React from 'react';
import './ContentCard.css'; // Arquivo CSS específico para este cartão

const ContentCard = ({ title, image, description }) => {
  return (
    <div className="content-card">
      <img src={image} alt={title} className="content-card-img" />
      <h1 className="content-card-title">{title}</h1>
      <p className="content-card-description">{description}</p>
    </div>
  );
};

export default ContentCard;
