const friends = ['Ajgour vai', 'Foni mosai', 'Jahidul Islam', 'Sobuj Miah', 'Kulsum khala']
const length = friends.map(freind => freind.length);
// console.log(length)
// console.log(length.length)

const products = [
    {name: 'Moile phone', price: 25000, color: 'Black'},
    {name: 'Water glass', price: 50, color: 'Red'},
    {name: 'Laptop', price: 55000, color: 'Black'},
    {name: 'Trimmer', price: 800, color: 'Black'},
    {name: 'Box', price: 30, color: 'White'},
]
// const pLength = product => product

// const outPut = [];
// for(const product of products){
//     const result = pLength(product)
//     outPut.push(result)
    
    
// }
// console.log(outPut)

const productsName = products.map(product => product.name)
const productsPrice= products.map(product => product.price)
products.map(product => console.log(product))
// products.forEach(product => console.log(product))
// console.log(productsPrice)
// console.log(productsName)
