// Iterate objects

const bike={
    color:"Blue",
    price:700000,
    model:"Abc",
    "aveg speed":30
}

// For Of Loop
for(let key in bike)
{
    // console.log(key);  
    // console.log(bike[key]);
    // console.log(`${key}:${bike[key]}`);
    //    console.log(key,bike[key]);
    
}
// 
console.log(Object.keys(bike));
let val=Array.isArray(Object.keys(bike))
console.log(val);
for(let b of Object.keys(bike))
{
    console.log(bike[b]);    
}

