import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Given how Github pages impacts production url, set router basename based on environment
const browserRouterBase = process.env.NODE_ENV === 'development' ? '' : '/invesddit';

root.render(
  <React.StrictMode>
    <BrowserRouter basename={browserRouterBase}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
