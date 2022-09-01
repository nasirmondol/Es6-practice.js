const myObjects = {x: 3, y: 9, z: 10, a: 13, b: 19};
const {x, w, r} = myObjects;
// console.log(x, w, r)

// destruncturing in array
const [p, q, c, d] = [100, 590, 800, 120, 200]
// console.log(p, q, d, c)

const [best, friend] = [50, 'Shakil']
// console.log(best, friend);

const {color, sky, soil} = {color: 'blue', sky: 'up', soil: 'Mati', me: 'emotion'}
// console.log( sky, color)

// optional chaining destructuring
const company = {name: 'GP', income: 20000000, owner: 'Fazal haque', 
    tech:{
        frameWork: 'React', employee: 20
        },
        itSector: {name: 'web evelopment', amount: 1000, instructor: 'Rahela Banu'}, 
        food: 'Panta vat'
}
console.log(company?.tech?.frameWork)
console.log(company?.money?.tech.frameWork)