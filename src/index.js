import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/containers/App';
import 'tachyons';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
