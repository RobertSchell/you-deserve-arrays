const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

//number in '[1]' refers to index in array (in this example, item 3 located at index 2), number in '[2]' refers to character located at index specified (in this example, item 2 located at index 1 of user entered string)
if(typeof userArray[2][1] === "string"){
    console.log(userArray [2][1])
}else{
    console.log("ERROR! Third item in array is not a string with at least two characters!")
}