console.log("0 == \\t :",0 == '\t'); // true, because of typeconversion
console.log("0 == \\n :",0 == '\n'); // true, because of typeconversion
console.log("\\t == \\n :",'\t' == '\n'); // false, because of no-typeconversion

// To convert a value to a Number we can use + sign before it
// console.log("+\\t :", +'\t');
// console.log("+\\n :", +'\n');
// console.log("+Hello :", +'Hello');
// console.log("+H :", +'H');

console.log("[] == 0 :", [] == 0); // true
console.log("\\t == 0 :", '\t' == 0); // true
console.log("[] == \\t :", [] == '\t'); // false
console.log("+[] == \\t :", +[] == '\t'); // true