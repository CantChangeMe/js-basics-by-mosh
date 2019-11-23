//IIFE
let app = (function() {
    //console.log("Hii");
    return {};
})();
//console.log(app);

//Closure
let app2 = (function(){
    let a = 123;
    let f  = function(){
        return a;
    }
    return {
        value : f
    }
})();
//console.log(app2.value());

//This keyword
function myfunction(){
    if(this === window){
        return true;
    }else {
        return false;
    }
}
//console.log(myfunction());

//Call and Apply
//Call
let o ={
    carId : 101,
    getId : function(){
        return this.carId;
    }
};
console.log(o.getId());

let car = {
    carId :102
}
console.log(o.getId.call(car));

//Apply
let o2 ={
    carId : 101,
    getId : function(prefix ,prefix2){
        return prefix +" "+ prefix2+" "+this.carId;
    }
};
console.log(o2.getId.apply(car,['Awesome','Awesome2']));

//Bind

let newFun = o.getId.bind(car);

console.log(newFun());

//Arrow function

let f = _ => 123;
let f2 = () => 123;
console.log(f2());

//Constructor function
function Car(id){
    this.id = id;
}
let car3  = new Car(323);
console.log(car3.id)

//Prototypes
Car.prototype.startCar = function(){
    console.log("Starting the car.")
}
car3.startCar();

//Expanding objects  using prototypes.

String.prototype.shout = function(){
    console.log(this.toString()  +" "+"Hello");
}
"Vivek".shout();

//JSON

let jsonIn = `[
{"id":1},
    {"id":2},
    {"id":3}
]`

let ob = JSON.parse(jsonIn);
console.log(ob);

console.log(JSON.stringify(ob));

//Array iteration

let carIds = [
    {
        carId : 123, style : "Sedan"        
    },
    { 
        carId : 456, style : "Convertible" 
    },
    {
        carId : 789, style : "Sedan" 
    }
]

carIds.forEach(car => {
  //  console.log(car);
});
carIds.forEach((car,index) =>{
   // console.log(car,index);
});

let convertibles =  carIds.filter(car => car.style === 'Sedan');
convertibles.forEach(car =>{
    console.log(car);
})

console.log(convertibles);

//Classes
class Plane{
    constructor(id){
        this.planeId = id;
    }
    getPlaneId(){
        return this.planeId;
    }
}
let plane = new Plane(121);
console.log(plane.getPlaneId());
