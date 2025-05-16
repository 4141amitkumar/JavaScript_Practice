let score = "33";

console.log(typeof score);
console.log(typeof (score));  //both are correct way

let valueInNumber = Number(score);  //at time of type conversion use first letter of datatype as Capital
console.log(typeof valueInNumber);
console.log("\n")


let score1 = "33abc"
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); //will give "number" as a dataype
console.log(valueInNumber1)  // will give NaN
console.log("\n")


let score2 = null
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //will give "number" as a dataype
console.log(valueInNumber2)  // will give 0
console.log("\n")


let score3 = undefined
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3); //will give "number" as a dataype
console.log(valueInNumber3)  // will give NaN
console.log("\n")


let isLoggedIn1 = 1;
let isLoggedIn2 = "";   //treated as false
let isLoggedIn3 = "Amit";  //treated as true

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);

let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3);
console.log("\n");


let num = 33
let str = String(num);
console.log(str);
console.log(typeof str);

console.log("\n");
console.log("\n");




//**********************Operations******************
let value = 3;
let negValue = -value;
console.log(negValue);
console.log("\n");

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(4/2);
console.log(4%3);

console.log("\n");

let str1 = "hello";
let str2 = " Amit";
let str3 = str1+str2;
console.log(str3);

console.log("\n");


//Important
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2+2); // **
console.log(1+2+"2"); // **
console.log(2+2+"3"+2+2);

console.log(3+4*5%3);

console.log("\n");
console.log(true);
console.log(+true);  //+ converts the bool into number
console.log(+""); //converts into number

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

console.log("\n");
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);