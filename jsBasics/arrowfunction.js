//It's is a normal function

function myFunction(val){
    console.log("The value is :", val);
}


const values = [1,2,3,4,5,6]

values.forEach(myFunction)

//we  can write the above function in the following way

values.forEach(function (val){ //since we are not calling the function myFunction, it is not needed here, so this function is called anonymous function 
    console.log("The value is :::", val);
})

//The function has no name is called anonymous function and it can only be used as an argument.

//We can  write anonymous function in the following way
//Here the variable is declaring instead of function declaration
//Hoisting : we can call the normal function before declaration and we cannot call the anonymous function before declaration
// Hoisting is a feature in js

const fn = function (val) {
    console.log("Hello world ", val)
}

values.forEach(fn)


//Arrow function
//It is another syntax for writing ananymous function
// anonymous function
const fcn = function(a,b) {
    console.log("Hello world");
    return a+b
}

//Arrow function
const fcn2 = (a,b) => {
    console.log("Hello world=");
    return a * b
}

let mult = fcn(1,2)
let adds = fcn2(2,4)

console.log(mult, adds)
// Also we can write the arrow function in one single line

const fn3 = (a,b) => a+b;
console.log(fn3(5,5))

//Arrow function returning string
const fn4 = () => "Hello";
console.log(fn4())

//Arrow function returning array
const fn5 = () => [1,2,3,4,5]
console.log(fn5())

//Example of object in Javascript
const obj = {
    a : 1,
    b : 2,
    c : 3
}

//Arrow function returning object
const fun6 = () => ({
    a : 1,
    b : 2,
    
});
//Since curly brace {} represent block of the function, so we need to put the obj in ()

console.log(fun6())


//Also we can write in multiple lines
const fn7 = () => {
    return {
        a : 1,
        b : 2
    }
}

console.log(fn7())

//Difference between anonymous function and arrow function

//oru object nte ullil 'this' enn paranjal aa object thanne
const myObj = {
    a : 1,
    b : 2,
    c : function () {
        console.log(this);
    }
};

//calling c function from myObj
myObj.c()
//calling object
console.log(myObj);

//Javascriptil this enna keyword the vilikkumbol use cheyyunna context nu anusarichaanu define aavunnath
var aa = myObj.c;
aa();
//Ingane vilichal, aa ku prathyekich context kodukkaathath kond, window function object aan vilikkunnath.

/*Pakshe arrow functionte case il ezhuthiya sthalathinanusarichaanu this vilikkunnath. Ivide this 
ezhuthiyath oru function nte ullilaan. Oru function nte context athinte parent function nte context aan.
Ivide function nu parent function illathath kond athinte context window function nte context. so engane
vilichaalum window function nte object aanu call aavuka*/

//bind and call
// call vilikkumbol eth context aanu enn theerumanikkunnu
// bind vilikkunnathinu munp thanne context bind cheyth vekkunnu. Appo engane vilichaalum context maarilla
// apply is same as call, in apply  the second  arrgument will be array

 
