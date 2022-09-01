//1. variable declear by let and const variable.
const myName = 'Md. Nasir';

let friendName = 'Robel';
friendName = 'Shakil'
// console.log(friendName)

// 2. templet string
// Object
const phone = {name: 'Samsung Galaxy s5', price: 15000, color: 'black', ram: '36GB'}

const name1 = `My name is ${myName} and my friend name is ${friendName}. I used ${phone.name} model phone and its price is ${phone.price}`
// console.log(name1);

// 3. parameter arrow function
const myNumber = (number) => number * 5;
const outPut = myNumber(10);
// console.log(outPut)

// 4. 2 input parameter add and two added add.
const multiple1 = (x, y) => {
    const add1 = x + 2;
    const add2 = y+ 2;
    const addedNumber = add1 * add2;
    return addedNumber
}
const inputNumber = multiple1(4, 8)
// console.log(inputNumber)

// 3 input parameter multiple
const multiply3 = (num1, num2, num3) =>{
    const result = num1* num2 * num3;
    return result
}
const sum = multiply3(2, 5, 9);
// console.log(sum)

// let a = 10;
// function f() {
//     let b = 9
//     console.log(b);
//     console.log(a);
// }
// const andFa = f();
// const andFb = f();
// console.log(andFa, andFb)

// declare many array and multiple by 8 and return another array.
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, ]
// console.log(numbers)
// const result = numbers.map(number => number * 5)
// console.log(result)

// Using filter to get even number
const numbers = [10, 28, 9, 57, 98, 23, 11, 5, 33, 127]
const oddNumbers = numbers.filter(number => number % 2 != 0)
// console.log(oddNumbers)

// using find to get an object
const products = [
    {name: 'phone', price: 19000, color: 'red'},
    {name: 'watch', price: 2000, color: 'black'},
    {name: 'laptop', price: 79000, color: 'black'},
    {name: 'fan', price: 5000, color: 'red'},
]

const prices = products.find(product => product.price == 5000)
// console.log(prices)

// Description of map: js e map diye loop chalano hoy.map chaliye js er array theke onekgula object and tader property or property value return kore.

// filter: condition er sathe match kore condition er array of object return kore.

// find: condition er sthe match kore only object return kore thake.


// destructuring
const student = {id: 20, name: 'salman khan', height: 10, color: 'Sundor'};
const {id, name, color, height} = student;
const names = student.name;
// console.log(names);

const addThreeNumber = (number1, number2, number3 = 7) =>{
    const result = number1 + number2 + number3;
    return result;
}
const addedResult = addThreeNumber(10, 30)
// console.log(addedResult);

// nested object
const dhaka = {country: 'bangladesh', title: 'city', situation: 'miiddle',district:{
    count: 64, thana: 57, nearest: 'Gazipur', develop: 'Narayanganj',north:{name: 'tangail', university:'yes', leaer: 'Vasani'}
}}

const universityes = dhaka?.rajdhani?.north.university;
console.log(universityes)