const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];


const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let x = 0; x < array.length; x++) {
        const element = matriz[i][x];
        newArray.push(element);
    }
}
const rta = matriz.flat(3);
console.log('for', newArray);
console.log('flat', rta);
//
