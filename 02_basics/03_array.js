const marvel_heroes = ["Ironman", "Thor","Hulk"];
const dc_heroes = ["Superman", "Batman","Flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);  //it doesn't merge both array, observe the output

marvel_heroes.concat(dc_heroes); //still didn't work
console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

//easy way to concat
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes)

//flat function
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //in bracket infinity specify the depth
console.log(real_another_array)

console.log(Array.isArray("Amit"))  //check whether it is array or not
console.log(Array.from("Amit"))  //converts into array
console.log(Array.from({name:"Amit"})) //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
