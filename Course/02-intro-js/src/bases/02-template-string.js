const name = 'Pedro';
const lastname = 'Hernandez';

const fullName = `${name} ${lastname}`;

console.log(fullName)

function getGretting(fullName){
    return `Hi litle human ${fullName}`;
}

console.log(`This is a text ${getGretting(fullName)}`)