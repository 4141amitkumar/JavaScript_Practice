const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myObject){
    console.log(key);
    console.log(myObject[key]);
}


const prog = ["js", "rb", "py", "java"]
for(const key in prog){
    console.log(key);    //it will print key not value
    console.log(prog[key]);
}


//can't use for in loop for map