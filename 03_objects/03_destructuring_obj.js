const course ={
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Amit"
}

//course.courseInstructor

const {courseInstructor} = course;  //this is destructuring
console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor)

//JSON - JavaScript Object Notation
// JSON ek format hai data ko store ya transfer karne ka — especially when you're sending data between client (browser) and server (backend).
//Example JSON
// {
//   "name": "Amit",
//   "age": 22,
//   "isStudent": true
// }                 Ye bilkul object jaise dikhta hai, but it's a string format (text) used in communication.

//API – Application Programming Interface
// API ek set of rules hai jiska use karke ek system (jaise frontend) doosre system (jaise backend/server/database) se baat karta hai.
// Example:
// Tu ek button dabata hai: "Get User Info"
// Browser API ko call karta hai → Server se JSON data aata hai → Browser use display karta hai.


// JSON API --- Ek web API jo data ko JSON format me bhejti aur leti hai, usse hum JSON API kehte hain.