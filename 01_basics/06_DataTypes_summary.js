//JavaScript is a dynamically typed language. 
//This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.


//There are basically two types of dataypes : 1.Primitive and 2.Non-Primitive

//Primitive Type   -> They are call by value
//1. String
//2. Number   //float and int both comes under number
//3. Boolean
//4. null
//5. undefined
//6. Symbol
//7. BigInt


//Reference Type(Non-Primitive)
//1. Array
//2. Objects
//3. Functions


const score = 100; //number
const scoreValue = 100.3 //number

const isLoggedIn = false; //boolean
const outside = null; //null
let userEmail;  //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId); // it will give false, because symbol assigns unique value to every variables

const bigNumber = 3456578965223366524545n;  //bigint


//Reference (Non Primitive)
const heroes = ["Shaktiman","Naagraj","Doga"] //Array

let myObj={
    name: "Amit",
    age: 22,
    gender: "Male"
}  //Objects

//Functions
const myFunc=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)

