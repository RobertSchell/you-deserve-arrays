const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let myBool = true;

console.log(typeof userArray[0]) // not necessary but helpful in terms of visualization/comprehension

if(typeof userArray[0] === "number"){
    console.log(`${myBool}, item 1 index 0 is a number`);
}else{
    myBool = false
    console.log(`${myBool}, item 1 index 0 is NOT a number`);
}

