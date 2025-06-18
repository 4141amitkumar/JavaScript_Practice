const score = 400    //automatically detected that this is a number
console.log(score);

const balance = new Number(100)  //explicitly defined that this is a number datatype
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);


// ++++++++++++++++++ MATHS +++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,8,74,2));

//IMPORTANT
console.log(Math.random());  //gives random values between 0 and 1 including 0 and 1 also
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10));


const min = 10;
const max = 21;
//IMPORTANT
console.log(Math.floor((Math.random()*(max-min+1))+min));  //Now it will give numbers between 10 to 21;
