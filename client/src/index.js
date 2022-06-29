import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { ContextAuthProvider } from './Context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextAuthProvider >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextAuthProvider >
  </BrowserRouter>
);

