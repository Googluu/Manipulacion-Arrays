const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++');
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('new', newArray);

// ejemplos
const arra1 = [1, 4, 9, 16];

const map1 = arra1.map(x => x * 2);
console.log(map1);