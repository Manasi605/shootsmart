// ✅ Import Bootstrap CSS FIRST
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Then React and app components
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: your own CSS

// ✅ Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);