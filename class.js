class Support{
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log('Start a support session')
    }
}
const aamir = new Support('Amir khan', 'Dubai');
const salman = new Support('Salman khan', 'Hongkong')
aamir.startSession();
salman.startSession()
// console.log(aamir)
// console.log(salman)