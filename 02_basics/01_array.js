//array

const myArr = [0,1,2,3,4,5,true,"Amit"];
console.log(myArr[6])

//there are two types of copy
// 1. Shallow Copy
// 2. Deep Copy
// Shallow copy of an object is a copy whose properties share the same references as those of the source object.
// Deep copy of an object is a copy whose properties do not share the same references as those of the source object.

const shallowCopy = [...myArr];
shallowCopy[0]=100;
console.log(myArr); //will not change for simple values

const deepCopy = JSON.parse(JSON.stringify(myArr));
deepCopy[0] = 100;
console.log(myArr); //not change because it's deepcopy

//now try shallow copy with object
const original = [{ name: 'Alice' }, { name: 'Bob' }];
const shallowCopy1 = [...original];
shallowCopy1[0].name = 'Charlie';
console.log(original[0].name); // original is affected!
