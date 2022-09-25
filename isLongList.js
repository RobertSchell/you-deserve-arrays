const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let myBool = true;

if (userArray.length >= 10){
    console.log(`${myBool}, array length is at least 10 items`);
}else if(userArray.length < 10){
    myBool = false
    console.log(`${myBool}, array length is less than 10 items`);
}
