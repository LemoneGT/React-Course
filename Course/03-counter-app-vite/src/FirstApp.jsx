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
export const FirstApp = () => {
    return(
        <>
            <h1>Soy un tiburon</h1>
            <p>Subtitulo</p>
        </>
    )
}