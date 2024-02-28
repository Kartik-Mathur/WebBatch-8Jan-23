let arr = [1,2,3,4,5];

let ans = arr.reduce((acc, val) => {
    console.log("Acc",acc,"Val",val);
    return acc * val;
},1)

console.log(ans);