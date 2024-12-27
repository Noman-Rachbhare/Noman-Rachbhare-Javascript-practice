// Nested if else 
let userage = 19;
var isCitizen = true;
var isResident = true;
if (userage > 18) {
    if (isCitizen) {
        if (isResident) {
            console.log("You are Eligible for Vote");
        } else {
            console.log("You are Not Eligible for Vote due to registeration status");
        }
    }
    else {
        console.log("You are Eligible for Vote due to citizenship status");
    }

}
else {
    console.log("You are Not Eligible for Vote")
}


// let winningnum=18;
// let userguess= +prompt("Guess a number");
// console.log(typeof userguess,userguess);
// if(userguess === winningnum)
// {
//     console.log(" congratulations Your Guess is Right ");
    
// }
// else{
//     if(userguess < winningnum)
//     {
//         console.log("Your Guess is to Low!! ");
        
//     }
//     else{
//         console.log("Your Guess is To High!! ");
        
//     }
// }
