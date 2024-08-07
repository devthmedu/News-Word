import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

import { Container } from 'react-bootstrap';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Container fluid className="main-content">
        <main className="content">
          <Outlet /> {/* Renderiza as rotas filhas aqui */}
        </main>
      </Container>
    </div>
  );
};

export default Layout;
