const addTwo = (num1,num2) =>{
    return num1 + num2;     //explicit return
}
console.log(addTwo(3,4));

//or directly

const addTwo1 = (num1, num2) => num1 + num2;  //implicit return
console.log(addTwo1(3,4));


const obj = () => ({username: "Amit"})  //for returning an object we need an cuurly braces
console.log(obj());