// For Of & For In Loop

// For Of Loop
let fruits=["Mango","Orange","Apple","Watermelon","Banana"];
let a=[];
// for (let fruit of fruits) {
//     a.push(fruit.toUpperCase());
// }
// console.log(a);

// For In Loop
let b=[];
for(let index in fruits )
{
    b.push(fruits[index]);
}
console.log(b);
