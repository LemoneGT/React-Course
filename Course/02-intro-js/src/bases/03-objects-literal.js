const person = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    address:{
        city: 'NY',
        zip: 13123,
        lat: 14.55,
        lng: 34.92323,
    }
};

// console.log(person);

// clone an object so as not affect to original object
const person2 = {...person};
person2.name = 'Peter';

console.log(person);
console.log(person2);