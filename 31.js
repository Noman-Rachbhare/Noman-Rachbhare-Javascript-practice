// Object destruction
const student={
    id:"1",
    name:"Noman",
    class:16,
    weight:24
};
const {id:var1,name:var2,...resprop}=student;
// console.log(id,name);
console.log(resprop.class);
console.log(var1);
console.log(var2);







