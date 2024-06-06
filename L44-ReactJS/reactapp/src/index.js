import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoApp from './components/TodoApp/TodoApp';
import MyFragment from './MyFragment';
import CatFact from './components/Catfact/CatFact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < CatFact />
);
