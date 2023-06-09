import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router'
import { BrowserRouter } from "react-router-dom";

// Style
import "./style/global.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
