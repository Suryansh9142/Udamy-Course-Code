// 1)

// const file = require('./utils.js')

// const name = 'Suryansh'
// console.log(name, file)

// 2) Adding Function 

const file = require('./utils.js')

const sum = file(4, 6)

console.log(sum)

// 3) challenge: Define and use a function in a new file
// 
// a) Create a new file called notes.js
// b) Create getNotes function that returns "Your notes..."
// c) Export getNotes function
// d) From app.js, load in and call the function printing messages to console
// 

// const file = require('./utils.js')

// const getNotes = file()
// console.log(getNotes)