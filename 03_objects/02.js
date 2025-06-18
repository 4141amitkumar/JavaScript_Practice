const facebookUser = new Object();  //singleton object
const facebookUser1 = {};  //not a singleton object
//both are empty objects, literally no internal difference

facebookUser1.id = "123abc";
facebookUser1.name = "Sammy";
facebookUser1.isLoggedIn = false;

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Amit",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"};
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

const obj = {obj1, obj2}
console.log(obj);

const obj3 = Object.assign({},obj1,obj2,obj5); // 1st one is the target and rest all are sources   //means obj1,2 and 5 will be copied in the empty object
console.log(obj3);

const obj4 = {...obj1, ...obj2, ...obj5};
console.log(obj4);



const users = [  //array
    {
        id:1,
        email: "me@gmail.com"
    },
    {
        id:2,
        email: "meeeee@gmail.com"
    },
    {
        id:3,
        email: "mee@gmail.com"
    }
]
console.log(users[1].email)


//very very important concept
console.log(Object.keys(facebookUser1));  // return datatype is array
console.log(Object.values(facebookUser1));
console.log(Object.entries(facebookUser1));

console.log(facebookUser1.hasOwnProperty('isLoggedIn'));