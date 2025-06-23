const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
user.welcomeMessage()
console.log(this);  //this is empty
// but when we execute this line on browser, it will give output WINDOWS, because browser has a default global object WINDOWS.

function me(){
    console.log(this);  //will give many many values
}
me();

function me2(){
    let username = "Amit"
    console.log(this.username);  //undefined, because it's function and not the object
}
me2();

const meee = () =>{
    let username = "Sam"
    console.log(this.username);
}
meee();


// Arrow function apna khud ka this nahi banata, balki jahan wo define hua hai wahan ka this inherit karta hai.

function ArrowFunctionExample() {
    this.name = "Arrow Function Example";
    setTimeout(() => {
        console.log(this.name); // ✅ "Arrow Function Example"
    }, 1000);
}
new ArrowFunctionExample();
