const fish = {id: 10, name: 'King Hilsha', price: 3000, color: 'Silver', address: 'Padma River', phone: '0184949494'}


// const name = fish.name;
// const price = fish.price;
// const id = fish.id;
// const phone = fish.phone;
const {id, name, price, phone, color, address} = fish;

// console.log(name, id)
// console.log(id, price)
// console.log(address)
// console.log(color, phone)
// console.log(name)

const company = {name: 'GP', income: 20000000, owner: 'Fazal haque', 
    tech:{
        frameWork: 'React', employee: 20
        },
        itSector: {name: 'web evelopment', amount: 1000, instructor: 'Rahela Banu'}, 
        food: 'Panta vat'
}

const {owner, income, food} = company
const {frameWork, employee} = company.tech;
console.log(frameWork, employee)
// console.log(owner, income, food)