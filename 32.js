// Objects inside Array
const users=[
    {user_id:1,user_name:"Noman",user_lname:"R"},
    {user_id:2,user_name:"Mubin",user_lname:"Q"},
    {user_id:3,user_name:"Saeed",user_lname:"s"},
]
// console.log(users);
for(let user of users)
{
    console.log(user.user_name);   
}
