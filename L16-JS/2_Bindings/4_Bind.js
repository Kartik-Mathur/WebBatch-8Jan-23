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
// Bind immediately function ko call nahi krta
// instant vo aapko function return kr deta hai that can be called
// later on
// let f = hello.bind(person1);
// f("Delhi","Nigeria");

let f1 = hello.bind(person2, "Pune", "Canada");
f1();