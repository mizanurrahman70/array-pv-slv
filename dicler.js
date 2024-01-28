// js-array-tasks
// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let frootName = ['mango', 'banena', 'orange ', 'apple' , 'lichi'];
console.log(frootName);
let index =frootName.indexOf('apple')

console.log(index);
let change = frootName.splice(3,1, 'jambura');
console.log(change)
console.log(frootName);