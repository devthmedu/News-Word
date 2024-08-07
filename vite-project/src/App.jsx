// src/App.js

import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './App.css';

// Componentes carregados de forma preguiçosa
const News = lazy(() => import('./components/News/News'));
const HeroSection = lazy(() => import('./components/HeroSection/HeroSection'));

// Componente de carregamento
const Loading = () => (
  <div className="loading">
    <p>Carregando...</p>
  </div>
);

// Componente de página de erro
const NotFound = () => (
  <div className="not-found">
    <h2>404 - Página Não Encontrada</h2>
    <p>A página que você está procurando não existe.</p>
  </div>
);

// Componente da barra de navegação
const NavBar = () => {
  const navigation = [
    { title: 'Wall Street Journal', path: '/wsj' },
    { title: 'TechCrunch', path: '/techcrunch' },
    { title: 'Negócios', path: '/business' },
    { title: 'Tesla', path: '/tesla' },
    { title: 'Apple', path: '/apple' },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/logo1-semfundo.png" alt="Logo" className="logo" />
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navigation.map((item) => (
            <Button
              key={item.title}
              component={Link}
              to={item.path}
              color="inherit"
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Componente Layout
const Layout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<Loading />}></Suspense>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 WORLD News</p>
      </footer>
    </div>
  );
};

// Componente principal
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <div className="welcome-message">
                  <h2>Bem-vindo ao WORLD News!</h2>
                  <p>
                    Selecione uma categoria no menu para começar a ler as
                    notícias.
                  </p>
                </div>
              }
            />
            <Route
              path="wsj"
              element={
                <News
                  apiUrl="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=803d48abe26443109f4186406032b557"
                  title="Artigos do Wall Street Journal"
                />
              }
            />
            <Route
              path="techcrunch"
              element={
                <News
                  apiUrl="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=803d48abe26443109f4186406032b557"
                  title="Principais manchetes do TechCrunch"
                />
              }
            />
            <Route
              path="business"
              element={
                <News
                  apiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=803d48abe26443109f4186406032b557"
                  title="Manchetes de Negócios nos EUA"
                />
              }
            />
            <Route
              path="tesla"
              element={
                <News
                  apiUrl="https://newsapi.org/v2/everything?q=tesla&from=2024-07-01&to=2024-07-31&sortBy=publishedAt&apiKey=803d48abe26443109f4186406032b557"
                  title="Notícias sobre Tesla - Mês Passado"
                />
              }
            />
            <Route
              path="apple"
              element={
                <News
                  apiUrl="https://newsapi.org/v2/everything?q=apple&from=2024-08-06&to=2024-08-06&sortBy=popularity&apiKey=803d48abe26443109f4186406032b557"
                  title="Artigos sobre Apple - Ontem"
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
