// src/index.js or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TokenProvider } from './context/TokenContext'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
