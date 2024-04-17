const characters = ['Luffy', 'Zoro', 'Franky'];

// adding empty space before to , refere to first element in the object
const [ , ,p3] = characters;

console.log(p3);

const returnArray = () =>{
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);


const usarState = (value) => {
    return [value, ()=>{ console.log('Hello world')}];
}

const [name, setName] = usarState('Luffy');

console.log(name);

// use this value to call the function inside to the array
setName();

