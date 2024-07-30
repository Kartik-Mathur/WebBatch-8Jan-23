import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.subscribe(() =>
    store.getState()
)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar />
            <App />
        </BrowserRouter>
    </Provider>
);

