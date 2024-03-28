class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printDetails(){
        console.log("Name:",this.name,", Age:",this.age);
    }

    get StudentName(){
        return this.name;
    }

    set StudentName(name){
        this.name = name;
    }
}

let uday = new Student("Uday",20);
let keshav = new Student("Keshav",15);

uday.printDetails();
keshav.printDetails();

// Getters and Setters are functions but we can use them as properties..
uday.StudentName = "Uday Singh";
console.log("Student Name is : ",uday.StudentName)
