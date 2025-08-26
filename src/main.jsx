import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RentalProvider } from './Context/RentalContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RentalProvider>
      <App />
    </RentalProvider>
  </React.StrictMode>
);
