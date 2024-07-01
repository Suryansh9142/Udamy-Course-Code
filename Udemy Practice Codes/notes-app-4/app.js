const validator = require('validator')
const chalk = require('chalk')


// Q) challenges: Use the chalk library in your project
// 
// 1) Install version 2.4.1 of chalk
// 2) Load chalk into app.js
// 3) Use it to print the string "Success!" to the console in green 
// 4) Test your work
// 
// Bonus: Use docs to mess around with other styles. make text bould and inversed.

const successGreen = chalk.green('Success')
console.log(successGreen)

const successGreenBold = chalk.green.bold('Success')
console.log(successGreenBold)

const successGreenInverse = chalk.green.inverse('Success')
console.log(successGreenInverse)