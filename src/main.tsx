import './styles/globals.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes';
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
