import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import List from  './list/List.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <div className='app-header'>
      <span className='header-title'>Code Malayalam</span>
      <span> Home </span>
      <span> Usage </span>
      <span> Settings </span>
      <span> Logout </span>

    </div>
    <div className='app-body'>
     <List />

    </div>
    <div className='app-footer'>
        Copyright@sahlaanas
    </div>
  </div>
);

