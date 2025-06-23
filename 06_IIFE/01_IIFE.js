//Immediately Invoked Function Expressions (IIFE)

(function one(){   //named IIFE
    console.log(`DB CONNECTED`);
})();   //should end this with ;
// Here first parenthesis is for function declaration and 2nd is for calling/execution of that function immediately

//IIFE
// Jo function immediately execute ho jaaye
// Global scope ke pollution se problem hoti hai some times, so we use IIFE to tackle that

// var count = 10;

// (function() {
//     var count = 5; // No conflict with global count
//     console.log("Inside IIFE:", count); // 5
// })();

// console.log("Outside IIFE:", count); // 10


( (name) => {  //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Amit")
