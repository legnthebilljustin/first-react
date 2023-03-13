import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './views/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // react strictmode mounts the components twice
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);
 
ReactDOM.render(
  <App/>,
  document.getElementById("root")
)