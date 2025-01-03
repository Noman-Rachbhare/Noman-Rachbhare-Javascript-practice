// Nested Destruction
const user=[
    {userid:"1",name:"Noman",gender:"Male"},
    {userid:"2",name:"Mujjo",gender:"Male"},
    {userid:"3",name:"TAlmeez",gender:"Male"}
]


// firstway
    // const [user1,user2,user3]=user;
    // console.log(user1.name);
    // console.log(user2.userid);
    // console.log(user3.gender);

    const [{name:var1,userid:var3},{userid:var2,name:var4},{userid}]=user;
    // console.log(name);
    console.log(var1);
    console.log(var3);
    console.log(var2);
    console.log(var4);
    
    
    
    
    
    
    