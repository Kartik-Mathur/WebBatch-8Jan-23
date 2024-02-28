let obj = {
    a: 1,
    b: 2,
    fun: function(){
        console.log(this);
        this.a = "Hello";
    }
}

obj.fun();

console.log(obj);