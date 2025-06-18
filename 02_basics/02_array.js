const myArr = new Array(1,2,3,4);
console.log(myArr);
console.log(myArr.length);
myArr.push(6);
myArr.push(8);
myArr.push(10);
console.log(myArr);
myArr.pop(10);
console.log(myArr);

myArr.unshift(9)  //not a good way, because it shifts every value to the right, and then insert this in starting
console.log(myArr);

myArr.shift();   //remove the first element
console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(6));

const newArr = myArr.join()   //newArr has a typeof string.
console.log(typeof myArr);   //object
console.log(typeof newArr);  //string

//concept of slice and splice
const myn1 = myArr.slice(1,3);
console.log("A",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log("B",myArr);
console.log(myn2);

// there are two difference between slice and splice
//1. slice doesn't includes the last index, but splice includes that
//2. slice doesn't make any changes to the original array, but splice breaks the original array too
