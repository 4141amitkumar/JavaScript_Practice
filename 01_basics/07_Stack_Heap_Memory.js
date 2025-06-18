//Stack Memory is used for primitive datatypes
//Heap Memory is used for non-primitive datatypes

//Stack memory provides copy, if we change something in primitive datatypes
//Heap memory changes in the original datypes

let myName = "AmitKumar";
let anothername = myName;
anothername = "Ashish";
console.log(myName);


let userOne={
    email: "user@googoel.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "userTwo@google.com";
console.log(userOne);

//see in primitive case, if I change anothername, myname is not affected although anothername=myname
// but when we change in non primitive datatype, changing in userTwo.email changes the original email of userOne
