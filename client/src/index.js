import React from 'react';
import ReactDOM from 'react-dom/client';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        "client-id": "AWztBWImewkA5VvmuvQeV0b6GUs-6p6rMFnWNnW_YSBtEBhGqMxZDCCP7s02aqcRZsXx9NIPgZP5IGjR",
        "currency": "MXN"
      }}
      onError={(error) => console.error("Error loading PayPal SDK:", error)}
    >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);

reportWebVitals();