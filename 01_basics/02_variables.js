const accountId = 144553;
let accountEmail = "amit@gmail.com";
var accountPassword = "12345";
accountCity = "Varanasi";
let accountState;

// accountId = 2  --> not allowed (because accountId is declared as const)

accountEmail = "4141amit@gmail.com";
accountPassword = "12344";
accountCity = "Patiala";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// one way to declare a const

// two ways to declare a variable (let, var)
// Prefer not to use var, because of issue in block scope and functional scope

// in javascript, accountCity will also be considered as varibales, try not to use that way

