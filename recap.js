// variable declear rules
const favoritePerson = 'Tamim Iqbal';
let phone = 'I phone max pro';
phone = 'Samsung Galaxy s10';

// declear the function and spread operator
function maxNumber(array= [14, 120, 17, 35, 12, 11]){
    const max = Math.max(...array)
    return max;
}
const biggest = maxNumber();
// console.log(biggest)


// templet string
const templet = `I have an cat and his name is '${favoritePerson}', he always used ${phone}`
// console.log(templet)

// Arrow function 
// simple function
function multiply(x){
    return x*x;
}
console.log(multiply(4))


// arrow2 function
const multiply2 = x => x*x;
console.log(multiply2(4))

