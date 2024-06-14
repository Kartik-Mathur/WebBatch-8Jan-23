import React from 'react'
import ReactDOM from 'react-dom/client';
import CatFacts from './components/CatFacts/CatFacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <div>Hello World</div> */}
        <CatFacts />
    </React.StrictMode>
)
