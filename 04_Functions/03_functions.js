function calculateCartPrice(...num1){   //this is rest
    return num1
}
console.log(calculateCartPrice(200,400,500))   //this will put all this is an array


function calculateCartPrice1(value1, value2,...num){
    return num;
}
console.log(calculateCartPrice1(200,400,500,2000)); //observe the output carefully


const user = {
    username: "Amit Kumar",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username: "sam",
    price: 499
});


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
