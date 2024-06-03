import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LuckySeven from './components/LuckySeven';
import TaskList from './components/TaskList';

// App = () => {
//     return (
//       <div>
//         <h2>Hello World!!!</h2>
//         <div>Learning React JS</div>
//         <Helloworld />
//       </div>
//     );
//   }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <App />
        {/* <LuckySeven /> */}
        <TaskList />
    </React.StrictMode>
);  
