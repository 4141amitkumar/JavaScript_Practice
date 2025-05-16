console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


console.log("2">1) //converted 2 in number automatically
console.log("\n");

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log("\n");
//in above example, equality check == and comparisons >= works differently
//Comparison converts null to a number, treating it as 0. That's why 13th line is giving true, but 12th line is giving false.

//=== strict check
//checks whether value as well as dataype is same or not

console.log("2"===2);