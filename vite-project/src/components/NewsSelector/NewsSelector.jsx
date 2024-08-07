import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import './NewsSelector.css';

const NewsSelector = ({ onSelect, selected }) => {
  const categories = [
    { key: 'wsj', label: 'Wall Street Journal' },
    { key: 'techcrunch', label: 'TechCrunch' },
    { key: 'business', label: 'Negócios' },
    { key: 'tesla', label: 'Tesla' },
    { key: 'apple', label: 'Apple' },
  ];

  return (
    <div className="news-selector">
      <ButtonGroup className="news-selector-group">
        {categories.map(({ key, label }) => (
          <Button
            key={key}
            variant={selected === key ? 'primary' : 'secondary'}
            className="news-selector-btn"
            onClick={() => onSelect(key)}
            aria-pressed={selected === key}
            aria-label={`Selecionar categoria ${label}`}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default NewsSelector;
