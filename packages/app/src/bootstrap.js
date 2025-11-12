import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe createRoot
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.querySelector('#root'); // Seleciona o elemento root
const root = ReactDOM.createRoot(rootElement); // Cria a raiz do React

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);