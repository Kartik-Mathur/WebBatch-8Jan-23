let lib1 = require('./lib1');

console.log("Running lib2");
let b = 10;

module.exports = {
    b,
    lib1
}