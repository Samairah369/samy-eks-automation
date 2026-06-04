import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#232f3e' }}>🚀 New Automation Project Samy is Live!</h1>
      <p style={{ color: '#4caf50', fontSize: '20px', fontWeight: 'bold' }}>
        Running successfully on AWS EKS via CI/CD Pipeline
      </p>
    </div>
  </React.StrictMode>
);