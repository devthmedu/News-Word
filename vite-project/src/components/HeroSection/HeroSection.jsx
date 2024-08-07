// src/components/HeroSection/HeroSection.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeroSection.css'; // Certifique-se de criar um arquivo CSS correspondente

const HeroSection = () => {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar uma citação aleatória
        const quoteResponse = await axios.get('https://api.quotable.io/random');
        setQuote(quoteResponse.data.content);

        // Buscar uma imagem aleatória
        setImage('https://picsum.photos/1920/1080');

        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar os dados.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="hero-content">Carregando...</div>;
  }

  if (error) {
    return <div className="hero-content">{error}</div>;
  }

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src={image} alt="Imagem de fundo" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h3>Inspiração do Dia</h3>
          <p className="quote-text">“{quote}”</p>
          <p className="description">
            Encontre a inspiração que você precisa para começar o seu dia. Nossa
            missão é trazer o melhor conteúdo para motivá-lo e ajudá-lo a
            alcançar seus objetivos. Explore nossos artigos e aproveite o que há
            de melhor na atualidade.
          </p>
          <a href="#more-info" className="cta-link">
            Saiba mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="cta-icon"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
