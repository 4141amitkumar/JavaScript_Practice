function one() {
    const username = "Amit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);    // here website is undefined
    two();
}
one();

if(true){
    const username = "Amit"
    if(username==="Amit"){
        const website = "Youtube"
        console.log(username + website);
    }
}
//console.log(username);


// ************INTERESTING *********************

console.log(addone(5))  //this will run
function addone(num){
    return num+1;
}
addone(5)

//console.log(addTwo(5));    //this will give error
const addTwo = function(num){
    return num + 2
}
addTwo(5);