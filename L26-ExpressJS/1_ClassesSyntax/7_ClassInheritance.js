// Syntactical Sugar Syntax
class Vehicle{
    constructor(company){
        this.company = company;
    }
}

// Car tab tak create nahi ho skti jab tak Vehicle na create
// ho jaaye
class Car extends Vehicle{
    constructor(company, name, price) {
        super(company);
        this.name = name;
        this.price = price;
    }
}

class Suv extends Car{
    constructor(company,name,price,type){  
        super(company,name,price);
        this.type = type;
    }
}

let maruti = new Car("Maruti","Lord Alto",100);
console.log(maruti);

let creta = new Suv("hyundia","Creta",50,"Suv");
console.log(creta);