import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={6} className="text-md-start text-center">
            <p>&copy; 2024 WORLD News. Todos os direitos reservados.</p>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <ul className="footer-links">
              <li>
                <a href="/about">Sobre Nós</a>
              </li>
              <li>
                <a href="/contact">Contato</a>
              </li>
              <li>
                <a href="/privacy">Política de Privacidade</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
