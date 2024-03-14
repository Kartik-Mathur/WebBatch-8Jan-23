let arr = [1,2,3,4,5];

Array.prototype.myMap = function(fun){
    let arr = this;
    let newArr = [];
    // Update newArr
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        let newVal = fun(val,i,arr);
        newArr.push(newVal);
    }
    // console.log(newArr);
    return newArr;
}


let x =arr.myMap((val,indx,arr)=>{
    return val*val*val
});

console.log(x);