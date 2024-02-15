function Parent(){

    var x = 1;

    function Child(){
        x++;
        console.log(x);
    }

    return Child;
}


let f = Parent();
let f1 = Parent();


f(); // 2
f(); // 3
f(); // 4

f1(); // 2
f1(); // 3
f1(); // 4
