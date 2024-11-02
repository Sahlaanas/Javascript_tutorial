var obj = {
    a:1,
    b:2,
    c:'HEllo'
}

console.log(obj)

var obj1 = {
    ...obj
}

console.log(obj1)

var a = [1,2,3]
var b = [...a]
console.log(a)
console.log(b)

//spread operatoring nadakkunnath shallow copying aan

console.log(obj === obj1) //output false
//because obj1 is the cloning of obj

var obj2 = {
    a1:1,
    b1:2,
    c:'HEllo 2'
}
var obj3 = {
    ...obj,
    ...obj2, 
    zz: 122   
}
//obj3 is the union of obj and obj2(concatenation)

console.log(obj3)

//deep copy and shallow copy

//usecase

var arr = [1,2,4,5,6,7]
var a = Math.max(...arr);
console.log(a); //output: 7

var arr1 = [1,3,56,6]
var b = Math.max(arr)
console.log(b) //output: Nan
