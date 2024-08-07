// src/components/News/News.js

import React from 'react';
import axios from 'axios';
import { Container, Spinner, Alert } from 'react-bootstrap';
import ContentCard from '../ContentCard/ContentCard';
import './News.css';

// Seção estática removida do componente News

const News = ({ apiUrl, title }) => {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setArticles(response.data.articles || []);
        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar as notícias.');
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiUrl]);

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Carregando...</p>
      </div>
    );

  if (error)
    return (
      <div className="my-5">
        <Alert variant="danger">{error}</Alert>
      </div>
    );

  return (
    <Container className="news-container">
      <h1 className="headline mb-4">{title}</h1>
      {articles.length === 0 ? (
        <div className="text-center">
          <p>Sem notícias para exibir.</p>
        </div>
      ) : (
        <div className="news-card-container">
          {articles.map((article, index) => (
            <ContentCard
              key={index}
              title={article.title}
              image={article.urlToImage}
              description={article.description}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default News;
