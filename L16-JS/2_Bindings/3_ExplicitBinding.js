function hello(state, country) {
    console.log("Name", this.name);
    console.log("Hobby", this.hobby);
    console.log("State", state);
    console.log("Country", country);
}

let person1 = {
    name: 'Harsh',
    hobby: "Coding"
}

let person2 = {
    name: 'Sibam Paul',
    hobby: 'Cooking'
}

// 1. Call ke through bind karna: Inbuilt function to change the binding inside hello
// function
// SYNTAX: hello.call(this, arguments);
// hello.call(person1); // hello ke andar jo this hoga that will point to 'person1'
// hello.call(person2, "Delhi", "India"); // hello ke andar jo this hoga that will point to 'person2'

// 2. Apply ke through bind karna: Inbuilt function to change the binding inside hello
// function
// here arguments are written inside the array
// SYNTAX: hello.apply(this, [arguments]);
// hello.apply(person2, ["Delhi", "USA"]);

// NOTE: Call and apply ekdum immediately function ko call/invoke kr dete hai instant

// 3. Bind ke through this ko change krna
