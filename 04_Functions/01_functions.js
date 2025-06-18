function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}
sayMyName();

function addTwoNumbers(number1, number2){  // here number1 and number2 is known as parameters
    console.log(number1+number2);
}
addTwoNumbers(3,10)  // 3,10 are arguments......means values which we put while calling the function is known as arguments
const result = addTwoNumbers(3,5);
console.log("Result:", result)   // this will print undefined



function addTwoNumbers1(number1,number2){
    let result = number1 + number2
    return result
    console.log("Amit") //this is of no use, once return is declared in the function
}
const result1 = addTwoNumbers1(3,5);
console.log("Result:", result1);