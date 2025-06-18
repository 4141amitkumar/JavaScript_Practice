function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Amit"));
console.log(loginUserMessage());  // it will give undefined just logged in


function loginUserMessage1(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage1());



function loginUserMessage2(username= "sam"){ //default value concept
    return `${username} just logged in`
}
