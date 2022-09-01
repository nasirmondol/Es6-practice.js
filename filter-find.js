const numbers = [1, 8, 90, 30, 59, 22, 18, 49, 100]
const bigNumbers = numbers.filter(number => number > 50)
const smallNumbers = numbers.filter(number => number > 30)
// console.log(smallNumbers);

// Filter array soho fully object jeita condition e bola thake seita prodhan kore thake. jodi condition na thake tahole empty array dibe.

const products = [
    {name: 'Moile phone', price: 25000, color: 'Black'},
    {name: 'Water glass', price: 50, color: 'Red'},
    {name: 'Laptop', price: 55000, color: 'Black'},
    {name: 'Trimmer', price: 800, color: 'Black'},
    {name: 'Box', price: 30, color: 'White'},
];
const prices = products.filter(product => product.price > 1000)
const colors = products.filter(product => product.color.toLowerCase() == 'black')
const names =  products.filter(product => product.name.toLowerCase() == 'laptop')
// console.log(names);

// find = find object ounjayi kono ekta conditioin k fullfill kore thake. jodi condition thake tahole object dibe. r na thakle uddefined dibe
const productNames = products.find(product => product.name == 'Trimmer')
console.log(productNames)