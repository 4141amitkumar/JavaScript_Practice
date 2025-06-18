const name = "Amit";
const repoCount = 50;
console.log(name + repoCount + " Value");

//more preferable to concatinate the strings variables
//use backtick
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('igi-2'); //another way of declaring the string, it gives many inbuild function, so preferred
console.log(gameName[2]);
console.log(gameName.__proto__); // prints the prototype of the String object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
const newString = gameName.substring(1,3);   //don't include the last index
console.log(newString);
const anotherString = gameName.slice(-3,5);  //don't include the last index
console.log(anotherString);

const newStringOne = "    amit  ";
console.log(newStringOne);
console.log(newStringOne.trimStart());
console.log(newStringOne.trim());

const url = "https://amit.com/amit%20kumar";
console.log(url.replace('%20','-'));

console.log(url.includes('amit'));
console.log(url.includes('ait'));

const sentence = "Hello,-I-am-learning-Java-Script";
console.log(sentence.split("-"));
console.log(sentence.split("-")[3]);