import {getHeroesId} from "../bases/08-imp-exp"

// resolve = success, reject = notificate some issue
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const heroe = getHeroesId(1);
//         resolve(heroe);
//         // to catch error
//         reject('the hero wasnt found');
//     }, 2000)
// });


// promise.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            const heroe = getHeroesId(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('the hero wasnt found');
            }
        }, 2000)

    });

    // you can do this
    // return promise;
}

// you have two forms to make this
getHeroeByIdAsync(10)
    .then(heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err));
// or this
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);