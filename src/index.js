import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DarkContext } from './context/DarkContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkContext>
      <App />
    </DarkContext>
  </React.StrictMode>
);


