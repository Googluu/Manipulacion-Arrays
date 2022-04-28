const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

const rta = elements.concat(othersElements)
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, 'random'];
const rta4 = [...elements, ...'random'];
console.log('rta4', rta4);
console.log('rta3', rta3);
console.log('...', rta2);
console.log('concat', rta);
console.log('for', newArray);
elements.push(...othersElements);
console.log('elements', elements);

