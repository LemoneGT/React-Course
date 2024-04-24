// arrays

// space in array 
// const array = new Array(100);

const array = [1, 2, 3, 4];
// array.push(1)
// array.push(2)
// array.push(3)
// array.push(4)

// clone original array and add 5 to this array
let array2 = [...array, 5];


// map to use all values or index from the array and this function
// multiples all values from the array with another number
const array3 = array2.map( function (number){
    return number * 2;
});

console.log(array);
console.log(array2);
console.log(array3);