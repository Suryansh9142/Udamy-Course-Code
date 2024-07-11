"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1)
// import chalk from 'chalk';
// const topic = chalk.blue.inverse('Getting input from users')
// console.log(topic)
// console.log(process.argv)
// 2)
// console.log(process.argv[2])
// 3)
var topic = _chalk["default"].blue.inverse('Getting input from users');

var command = process.argv[2];
console.log(command);
console.log(process.argv);

if (command === 'add') {
  console.log('Adding a new note');
} else if (command === 'remove') {
  console.log('Removing a note');
} // IN terminal command :-
// 1) node app.js .
// 2) node app.js suryansh .
// 3) node app.js add .
// 4) node app.js remove .
// 5) node app.js add --title="This is my title"
// 5) node app.js add --title="This is my title" --body="This is a body"s