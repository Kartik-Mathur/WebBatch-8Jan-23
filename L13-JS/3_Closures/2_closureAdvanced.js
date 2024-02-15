function grandFather(){
    var x = 1;

    function Parent(){
        x++;

        function Child(){
            x++;
            console.log(x);
        }
        return Child;
    }

    return Parent;
}

let fun = grandFather();

let f1 = fun(); 
let f2 = fun();

f1(); // 4
f1(); // 5
f2(); // 6
f2(); // 7
