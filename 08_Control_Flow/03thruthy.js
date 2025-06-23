const userEmail = "amit@gmail.com"

if(userEmail){
    console.log("Got user email");
}
else console.log("Don't get");


const userEmail1 = ""

if(userEmail1){
    console.log("Got user email");
}
else console.log("Don't get");

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false' , " ", [], {}, function(){}
// **********   empty array and empty object is considered as true values
// function(){} also considered as true 


if(!userEmail.length){
    console.log("Array is empty");
}


const empytyObj = {};
if(Object.keys(empytyObj).length===0){      //usual practice to check about object
    console.log("Object is empty")
}




// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);


//The Nullish Coalescing Operator (??) returns the right-hand value only when the left-hand value is null or undefined.
//It is used to provide a default value when the main value is missing (but not when it is 0, false, or "").

// let result = value1 ?? value2;
// If value1 is not null or undefined, result = value1
// Else, result = value2


let age = 0;
let finalAge = age ?? 18;
console.log(finalAge); // 0 (Because 0 is not null or undefined)


//Ternary operator
//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");