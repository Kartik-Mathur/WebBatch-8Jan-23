let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(function (val, indx) {
    // console.log("Val", val, "Index", indx, "Arr", arr);
    return val + val;
})

console.log(newArr);

let newArr1 = arr.map((val, indx, arr) => {
    // console.log("Val", val, "Index", indx, "Arr", arr);
    return val * val;
});
console.log(newArr1);


let boolArr = arr.map((val)=>{
    if(val%2 == 0) return true;
    else return false;
})

console.log(boolArr);