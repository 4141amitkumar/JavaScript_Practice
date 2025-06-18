//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

//Important
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());  //After seeing the output, it is observed that month starts with 0 in JS

let myCreatedDate1 = new Date(2023,0,23,5,3);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023");
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);  //this value is miliseconds from 1st Jan 1970 till now.
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  //to convert it into seconds


let newDate = new Date();
console.log(newDate.getDay());  //0 means sunday, 1 means monday and so on
console.log(newDate.getFullYear());

//to customize the format of the output
newDate.toLocaleDateString('default',{
    weekday: "long"
})
