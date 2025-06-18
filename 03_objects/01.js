const mySymbol = Symbol("key1");
const JsUser = {
    name: "Amit",   //back of the screen name is also stored as "name" (string)
    age: 20,
    "full name": "Amit Kumar",
    location: "Varanasi",
    [mySymbol]: "mykey1",   // this is the way to use symbol in object, also see the output properly
    email: "amit@gmail.com",
    isLoggedIn: false,
    lastLogin: [ "Monday", "Saturday"]
};  //This method of creating object is known as OBJECT LITERALS
//Object Literals are not a singleton by default (Singleton ka matlab hota hai: "ek hi instance".)

console.log(JsUser.email); //1st way of accessing elements of object
console.log(JsUser["email"]);  //2nd way of accessing elements of object
console.log(JsUser["full name"]);  //only way to access this full  name
console.log(JsUser[mySymbol]);  //only way to access symbol
JsUser.email = "4141amitkumar@gmail.com";
//Object.freeze(JsUser);

console.log(JsUser)


JsUser.greetingggg = function(){
    return `Hello, ${this.name}`;
}
console.log(JsUser.greetingggg);  //this will not execute the function
console.log(JsUser.greetingggg()); //see the difference in both outputs


const a = { name: "Amit" };  
const b = { name: "Amit" };
console.log(a === b); // false

//************************************************************************************************* */

Object.create  //another way of creating an object
const user = {
  greet() {
    console.log("Hello!");
  }
};

const newUser = Object.create(user);
newUser.name = "Ravi";

console.log(newUser.name); // Ravi
newUser.greet(); // Hello! (inherited from user)

//Benefits of singleton
// Memory efficient: Ek hi object use ho raha hai baar-baar.
// Code reusability: Prototype ke through functions share hote hain.

