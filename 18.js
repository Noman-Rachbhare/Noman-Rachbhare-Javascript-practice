// Primitive types in arrays

let num1=5;
let num2=num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);
num1++;
console.log("After Increament");
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

// Refrence  types in Array

let arr1=["item1","item2"]
let arr2=arr1;
console.log(arr1);
console.log(arr2);

console.log(arr2.push("item3"));
console.log(arr2);
console.log(arr1);