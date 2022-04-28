const months = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b) => a.localeCompare(b));
console.log(words)

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        Date: new Date(2022, 1, 3, 4),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        Date: new Date(2022, 1, 6, 9),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        Date: new Date(2022, 1, 15, 6),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        Date: new Date(2022, 1, 12, 5),
    },
];
orders.sort((a,b) => a.Date - b.Date);
console.log(orders);

