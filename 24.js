// Array Destructing

let Array=["1","2","3","4"]
// let a=Array[0];
// let b=Array[1];
// let c=Array[2];
// let d=Array[3];
// console.log(a,b,c,d);
let [a,b,c,d]=Array;
console.log("value of a =",a);
console.log("value of b =",b);
console.log("value of c =",c);
console.log("value of d =",d);

// Another Exp

let Arr1=["Item1","Item2","Item3","item4","Item5"];
let[var1, ,var2,var3,...newArray]=Arr1;

// let newArray=Arr1.slice(2);
// console.log(newArray);
console.log(newArray);


console.log("value of var1 is ",var1);
console.log("value of var2 is ",var2);
// console.log("value of var3 is ",var3);  /* output will be undefined */
// Update variable Value
var1="Noman";
console.log("value of var1 is ",var1);




