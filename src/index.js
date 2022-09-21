import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: 'AIzaSyDM-iRKQATqIQsis45nTysGizJV4Aw71fk',
  authDomain: 'camada-34720.firebaseapp.com',
  projectId: 'camada-34720',
  storageBucket: 'camada-34720.appspot.com',
  messagingSenderId: '505992511746',
  appId: '1:505992511746:web:8bf86050ce0ec0631ec21b',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
