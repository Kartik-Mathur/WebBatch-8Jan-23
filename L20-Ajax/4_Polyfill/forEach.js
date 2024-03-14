let arr = [1,2,3,4,5,6];
let arr1 = [1,2,3,4,"Hello",6];

Array.prototype.meraForEach = function(fun){
    // let arr = this;
    // fun = (data,indx,arr)=>{
    //     console.log("Index:",indx,"Data:",data,"Arr:",arr);
    // }
    let arr = this;
    for(let i = 0 ; i < arr.length ; i++){
        fun(arr[i],i,arr);
    }
}

// arr.meraForEach((data,indx,arr)=>{
//     console.log("Index:",indx,"Data:",data,"Arr:",arr);
// })

arr.meraForEach((data)=>{
    console.log(data);
})

// arr1.meraForEach((data,indx,arr)=>{
//     console.log("Index:",indx,"Data:",data,"Arr:",arr);
// })

// Inbuilt ForEach
// arr.forEach((data,indx,arr)=>{
//     console.log("Index:",indx,"Data:",data,"Arr:",arr);
// })