import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.subscribe(() =>
  store.getState()
)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <App />
    </Provider>
  </BrowserRouter>
);

