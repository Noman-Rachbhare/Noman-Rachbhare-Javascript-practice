// Spread Operator
const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
const obj2={
    key4:"value4",
    key5:"value5",
    key6:"value6",
    key4:"value2"
}
const newobj={...obj2,...obj1,key7:"value7"};
console.log(newobj);

const a={..."abcd"}
console.log(a);
const newobj1={...obj2,...obj1,key5:"item5",..."abcdefghijklmnopqrstuvwxyz"}
console.log(newobj1);


