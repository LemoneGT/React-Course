import React from 'react'
import ReactDOM from 'react-dom/client';
// import {HelloWorldApp} from './HelloWorldApp';
import { FirstApp } from './FirstApp';

// import HelloWOrldApp from './HelloWorldApp'

// import styles
import './styles.css';


// you nedd to add the name of your function to agregate in react en generate the object
// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp />
//     </React.StrictMode>
// )


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* if you want to aggregate properties, you need to do this */}
        {/* add {} to aggregate int in your properties */}
        <FirstApp title="Hola soy un marciano" subTitle={123}/>
    </React.StrictMode>
)