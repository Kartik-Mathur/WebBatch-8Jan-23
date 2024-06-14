import React from 'react'
import ReactDOM from 'react-dom/client';
import CatFacts from './components/CatFacts/CatFacts';
import Cleanup from './components/Cleanup/Cleanup';
import SearchProducts from './components/SearchProducts/SearchProducts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <div>Hello World</div> */}
        {/* <CatFacts /> */}
        {/* <Cleanup /> */}
        <SearchProducts />
    </React.StrictMode>
)
