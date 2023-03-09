import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/application/App';
import './css/style.css';
import './css/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
