const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},5)

console.log(myTotal);


// directly
const myT = myNums.reduce((acc,curr)=>acc+curr,0);
console.log(myT);