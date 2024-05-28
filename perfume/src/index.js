import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <CartProvider>
     <App />
     </CartProvider>
    
     
       
      
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
