import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WelcomePage from './componets/welcomePage';
import Species from './componets/species';
import Neutered from './componets/neutered';
import Age from './componets/age';
import Weight from './componets/weight';
import InputForm from './componets/input';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomePage />
    <Species />
    <Neutered />
    <Age />
    <Weight />
    <InputForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
