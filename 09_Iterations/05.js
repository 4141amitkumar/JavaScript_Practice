const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (abc){
    console.log(abc);
});

coding.forEach((abc)=>{
    console.log(abc);
})

//3rd way
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);


// IMPORTANT
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})



const myCoding = [
    {
        languageName: "JS",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})