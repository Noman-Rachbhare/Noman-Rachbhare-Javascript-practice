// Diffrence Between Dot And Bracket in Object
const key="desingn";
const bike={
    color:"Blue",
    price:700000,
    model:"Abc",
    "aveg speed":30
}
console.log(typeof bike);
// console.log(bike);

console.log(bike.price);
console.log(bike["color"]);
console.log(bike["aveg speed"] );

bike.name="Burgman";
console.log(bike.name);
bike[key]="xyz";
console.log(bike);
// console.log(`${key}:${bike[key]}`);