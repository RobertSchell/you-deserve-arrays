const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let getLastItem = userArray.length;

console.log(userArray[getLastItem-1]);
