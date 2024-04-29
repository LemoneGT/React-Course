import { Fragment } from 'react';


// use fragment to add two elementes or components in component
// export const FirstApp = () => {
//     return(
//         <Fragment>
//             <h1>Soy un tiburon</h1>
//             <p>Subtitulo</p>
//         </Fragment>
//     )
// }

// if you dont write nothing in EventTarget, is the same to fragment
const newMessage = {
    message: 'Hola marciano',
    status: true,
};

const getMessage = ( message ) =>{
    return message;
}

export const FirstApp = () => {
    

    return(
        <>
            <h1>{ getMessage('Esto se autodestruira') }</h1>
            {/* if you need to send or you need the object convert in this json.stringify */}
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>Subtitulo</p>
        </>
    )
}