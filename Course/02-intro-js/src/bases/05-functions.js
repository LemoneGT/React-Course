// functions with js
const greeting = function greeting(name){
    return `Hi ${name}`;
}


const greeting2 = (name) => {
    return `Hi ${name}`;
}

// lighter function, has only return
const greeting3 = (name) => `Hi ${name}`;

const greeting4 = () => `Hello world`;

console.log(greeting2('Vegeta'));
console.log(greeting3('Picoro'));
console.log(greeting4());

// in this case we need to add () to refer we need to return an object
const getUser = () => ({
        uid: 'dad13',
        username: 'Maximun_Power'
});


console.log(getUser());

const getUserActive = (name) => ({
    uid: '12312ABDC',
    username: name,
})

const userActive = getUserActive('Gohan');
console.log(userActive);