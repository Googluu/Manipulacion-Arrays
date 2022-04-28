const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for' ,element);
}
//ahora con metodos de arrays reduciendo las lineas de for en una sola
letters.forEach(item => console.log('forEach' ,item));
