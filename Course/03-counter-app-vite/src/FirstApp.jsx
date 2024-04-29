import { Fragment } from 'react';
import PropTypes from 'prop-types';


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

// export const FirstApp = () => {
    

//     return(
//         <>
//             <h1>{ getMessage('Esto se autodestruira') }</h1>
//             {/* if you need to send or you need the object convert in this json.stringify */}
//             {/* <code>{ JSON.stringify(newMessage) }</code> */}
//             <p>Subtitulo</p>
//         </>
//     )
// }

// if you want to show the title in your props, you only to write the component or object of props
// and you have to create a default value in yopu type of prop
export const FirstApp = ( {title, subTitle} ) => {
    // console.log(props)
    // if(!title){
    //     throw new Error('El titulo no existe')
    // }

    return(
        <>
            <h1>{ title }</h1>
            {/* if you need to send or you need the object convert in this json.stringify */}
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>{subTitle + 1}</p>
        </>
    )
}


// you need to add PropTypes to refer what type you need
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}