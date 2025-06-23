let a = 10;    // global scope
const b = 20;
var c = 30;

if(true){
    let a = 20;
    console.log("Inner",a);
}
console.log(a);
console.log(b);
console.log(c);

var f = 300;
if(true){
    let d = 10;
    const e = 20;
    var f = 30;
}
//console.log(d); //will give error
//console.log(e); //will give error
console.log(f); // will be printed
