// Array

let arr=["A","b","c","D","E","f","g","H"]
console.log(arr[6]);
console.log(typeof arr);
arr[2]="N";
console.log(arr);

console.log(Array.isArray(arr));


// Push Method
const a=arr.push("Z");
console.log(a);



// Pop Method
let remove=arr.pop();
console.log(remove);

// Unshift

arr.unshift("B");
console.log(arr);

const C=arr.shift();
console.log(C);

// Shift
const d=arr.shift();
console.log(d);
console.log(arr);

let fruits=["apple","banana","orange","mango"]
console.log(fruits.push("Watermelon","kharboj"));
console.log(fruits);
// pop Remove Elemnets FRom Array last se
console.log(fruits.pop());
console.log(fruits);
// unshift Add New Elements in array  start mai
console.log(fruits.unshift("kharboj"));    
console.log(fruits);
// shift Remove Elements From start in Array
console.log(fruits.shift());
console.log(fruits);
// splice Method syntax(start,delete count,replace item)
(fruits.splice(3,1,"Shitaphal"));
console.log(fruits);





