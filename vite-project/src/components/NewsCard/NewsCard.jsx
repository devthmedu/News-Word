// src/components/NewsCard/NewsCard.js

import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './NewsCard.css';

const NewsCard = ({ title, date, description, image, url, tags }) => {
  return (
    <Card className="news-card">
      <div className="news-card-img-container">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="news-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="news-card-title">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted news-card-date">
          {date}
        </Card.Subtitle>
        <Card.Text className="news-card-text">{description}</Card.Text>
        <div className="news-card-buttons">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Ler mais</Button>
          </a>
        </div>
        {tags && tags.length > 0 && (
          <div className="news-card-tags mt-3">
            {tags.map((tag, index) => (
              <Badge key={index} pill className="news-card-tag">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
