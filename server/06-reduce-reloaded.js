const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta);
//Reto

const numbers = [1,2,3,4,5,6,7,8,9];

const breween = (x, min, max)  => x >= min  && x <= max;
const rta = numbers.reduce((acm, item) => {
   if(breween(item, 1, 5)) acm ["1-5"] += 1;
   if(breween(item, 6, 8)) acm ["6-8"] += 1;
   if(breween(item, 9, 10)) acm ["9-10"] += 1;
   return acm;
 },
   { "1-5": 0, "6-8": 0, "9-10": 0 },
 ); 
 console.log('rta', rta);
//
// const numerosRandom = [1,2,3,4,5,6,7,8,9,10];
// const rta = numerosRandom.reduce((obj, item) => {
//     switch (item) {
//         case 1|| 2|| 3|| 4|| 5:
//         obj["1-5"] += 1
//         break;
//         case 6|| 7|| 8:
//             obj["6-8"]+=1
//             break;
//             case 9|| 10:
//                 obj["9-10"]+=1
//                 break;
//                 default:
//                     break;
//     } 
//       return obj; 
//     }, { "1-5": 0, "6-8": 0, "9-10": 0 }  );
//     console.log(rta);
 
//
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rta1 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    } 
    return obj;
}, {});
console.log(rta1);

// 
