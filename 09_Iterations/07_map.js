const myNumb = [1,2,3,4,5,6,7,8,9,10];
const myNumber = myNumb.map((num)=> (num+10))
console.log(myNumber)

// map() har element pe operation karta hai aur naya array return karta hai with transformed values.

// filter() har element pe check lagata hai, aur sirf wo element return karta hai jo condition pass karte hain.