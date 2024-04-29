import React from 'react'
import ReactDOM from 'react-dom/client';
// import {HelloWorldApp} from './HelloWorldApp';
import { FirstApp } from './FirstApp';

// import HelloWOrldApp from './HelloWorldApp'


// you nedd to add the name of your function to agregate in react en generate the object
// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp />
//     </React.StrictMode>
// )


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)