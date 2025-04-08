import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider } from "primereact/api";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <PrimeReactProvider>


      <App />

    </PrimeReactProvider>
  </React.StrictMode>
);