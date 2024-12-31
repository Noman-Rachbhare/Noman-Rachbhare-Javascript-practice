// Clone Array How to copy arrays elements from another array

// By silce Method
// By using Concat
// By Spread Operator

let arr1=["A","B","c"];
// console.log(arr1);

// let arr2= arr1.slice(0);
// console.log(arr2);
// arr1.push("d");
// console.log(arr1);
// console.log(arr2);

// By Concat Method
// let arr2=[].concat(arr1);
// console.log(arr2);
// arr1.push("d");
// console.log(arr1);
// console.log(arr2);

// By Spread Operator
let arr2=[...arr1,"E","f"];
arr1.push("D");
console.log(arr1);
console.log(arr2);
console.log(arr1==arr2);













 