import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App days="2" isGoal={true} />
  </React.StrictMode>
);

reportWebVitals();
