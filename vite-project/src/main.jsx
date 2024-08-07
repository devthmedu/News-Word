import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Verifique se o caminho para o componente App está correto

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Elemento root não encontrado. Verifique o HTML.');
}
