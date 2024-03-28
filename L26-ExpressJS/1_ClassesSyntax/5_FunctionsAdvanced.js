function Vehicle(company){

}

function Car(company, model) {
    
}


Car.prototype = Object.create(Vehicle.prototype); // Establishes inheritance from the prototype of Vehicle 

Car.prototype.constructor = Car;
Vehicle.prototype.constructor = Vehicle;

/* Console Details

> Car.prototype.__proto__
{}
> Car.prototype.__proto__ == Vehicle.prototype
true
> Vehicle.__proto__
ƒ () { [native code] }
> Vehicle.__proto__ == Function.prototype
true

*/