// Constructor Function
function Student(name,age,marks){
    this.name = name;
    this.marks = marks;
    this.isBaalik = function(){
        return age>=18;
    }
}

Student.prototype.printDetails= function(){
    console.log(`Name: ${this.name}, 
    Age: ${this.age} , Marks :${this.marks}`);
}

let uday = new Student("Uday",20,95);
let keshav = new Student("Keshav",15,80);

if(keshav.isBaalik()){
    console.log("Baalik Hai");
}
else{
    console.log("Na Baalik Hai");
}

console.log(uday);
console.log(keshav);