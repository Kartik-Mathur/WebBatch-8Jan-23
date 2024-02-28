let arr = [1,2,3,4,5];

let newArr = arr.filter((val)=>{
    if(val%2 == 0) return false;
    else return true;
})

let newArr1 = arr.filter((val)=>{
    return val%2 == 0;
})

console.log(newArr);
console.log(newArr1);

console.log(arr);