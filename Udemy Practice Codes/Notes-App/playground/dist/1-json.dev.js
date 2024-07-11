"use strict";

// 1)
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// // In Terminal :- node 1-json.js
// const parseData = JSON.parse(bookJSON)
// console.log(parseData) // node 1-json.js
// console.log(parseData.title) // node 1-json.js
// console.log(parseData.author) // node 1-json.js
// 2)
var fs = require('fs');

var book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}; // creating a (.json) file to stores the data. In this case we are storing the data of book

var bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON); // After commenting out the all privious code then we run the readFileSync ( ) command to read the (.json) file that we created with the help of privious code .
// The process the reading a .json file we have to do as follow :-

var dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer); // if we using this only then we have to get the output in the form of memory bytes size. // node 1-json.js
// Output : <Buffer 7b 22 74 69 74 6c 65 22 3a 22 45 67 6f 20 69 73 20 74 68 65 20 45 6e 65 6d 79 22 2c 22 61 75 74 68 6f 72 22 3a 22 52 79 61 6e 20 48 6f 6c 69 64 61 79 ... 2 more bytes>
//  If we get the data from .json file then we have to do as follow :-

console.log(dataBuffer.toString()); // node 1-json.js
// In 2nd easy step to get data in string
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)
// In terminal :- node 1-json.js