// use this to importe values from your file
// fist value is a default export and the second {} is to refere individual export
import heroes, {owners} from "../data/heroes"

console.log(owners)

// create a elemente en this element you need, and the element you need to find from the object
const getHeroesId = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}

console.log(getHeroesId(1));

// use filter, to get some objects from the original object
const getHeroesByOwner = (owner) =>{
    return heroes.filter( (heroe) => heroe.owner === owner);
}

console.log(getHeroesByOwner('Marvel'));