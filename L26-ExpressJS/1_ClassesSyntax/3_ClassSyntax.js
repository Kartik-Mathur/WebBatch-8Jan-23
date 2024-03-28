class Student{
    constructor(name, age,marks){
        this.name = name;
        this.marks = marks;
        this.isBaalik = function(){
            return age>=18;
        }
    }

    printDetails(){
        console.log(`Name: ${this.name}, 
        Age: ${this.age} , Marks :${this.marks}`);
    }
}

let uday = new Student("Uday",20,95);
let keshav = new Student("Keshav",15,80);

if(uday.isBaalik()){
    console.log("Baalik Hai");
}
else{
    console.log("Na Baalik Hai");
}

uday.printDetails();
keshav.printDetails();

// console.log(uday);
// console.log(keshav);

console.log(uday.__proto__ == Student.prototype);
console.log(Student.prototype)