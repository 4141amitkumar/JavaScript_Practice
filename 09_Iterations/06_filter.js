const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values);   //this will return undefined....As forEach is not able to return something, and here comes the problem


const myNums = [1,2,3,4,5,6,7,8,9];
const newNums = myNums.filter((num)=>num>4);   //this will return something

console.log(newNums);


//****************************************

const newNumss = [];
myNums.forEach((num)=>{
    if(num>4) newNumss.push(num)
})
console.log(newNumss)