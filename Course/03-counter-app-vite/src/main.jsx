import React from 'react'
import ReactDOM from 'react-dom/client';

function App(){
    // document.createELement...
    return  (<h1>Hola mundo!!</h1>);
}

// you nedd to add the name of your function to agregate in react en generate the object
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
