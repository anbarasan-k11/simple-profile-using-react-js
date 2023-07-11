import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Fullpage } from './parent.jsx/fullpage';
// import App from './App';
//import { Names } from './Names';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Names name='test' age='21' /> 
  // </React.StrictMode>
  <React.StrictMode>
    <Fullpage /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


 