const numbers = [2, 5, 6, 8, 10]
const names = ['Rahim', 'Faruk', 'Sajidul', 'Amrin', 'Tiluttoma', 'Sujan', 'Robel'];
const find  = names.map(x => x + ' ' + 'Armani')
console.log(find)
// function doubleOld(number){
//     return number *2;
// }

// const doubleIt = number => number * 2;

// const outPut = []
// for(const number of numbers){
//     const result = doubleIt(number);
//     outPut.push(result)
// }
// console.log(outPut)

// const outPut = numbers.map(number => number * 2)
const outPut = numbers.map(x => x * 5)
// console.log(outPut)

const square = numbers.map(x => x * x)
// console.log(square)