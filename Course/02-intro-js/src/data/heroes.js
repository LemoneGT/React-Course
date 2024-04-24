// to export some values, you need to add exporte before your variable
// if you need to export some of this File, you need to write export const herores = []
// or you need to export default, you need to add export default[]
export const herores =[
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC', 'Marvel'];

// you can to export values if you write this code
// export const owners = ['DC', 'Marvel'];
// export default herores;

// export many values or variables
export {
    herores as default,
    owners
}
