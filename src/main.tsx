import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { URLpath } from 'config.ts';
import App from './App.tsx';

import './assets/styles/index.css';

// Обнуление стилей
import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={URLpath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
