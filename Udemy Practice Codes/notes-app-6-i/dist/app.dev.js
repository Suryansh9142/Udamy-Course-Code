"use strict";

// 1)
// const yargs = require('yargs')
// console.log(process.argv)
// console.log(yargs.argv)
// // In Terminal Command :-
// // 1) node app.js
// 2)
// const yargs = require('yargs')
// // customize yargs version
// yargs.version('1.1.0')
// console.log(yargs.argv)
// In terminal :-
// 1. node app.js --help
// 2. node app.js --version
// 3)
var yargs = require('yargs'); // Create add command 


yargs.command({
  command: 'add',
  describe: 'Add a note',
  handler: function handler() {
    console.log('Adding a note');
  }
}); // Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function handler() {
    console.log('Removing a note');
  }
}); // 
// Q) challenge: Adding two new commands
// 
// 1. Setup command to support "list" command (print placeholder message for now)
// 1. Setup command to support "read" command (print placeholder message for now)
// 3. Teast your work by running both commands and ensure correct output
// 
// Create list command

yargs.command({
  command: 'list',
  describe: 'list the items',
  handler: function handler() {
    console.log('Listing the items');
  }
}); // Create read command

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function handler() {
    console.log('Reading a note');
  }
});
console.log(yargs.argv); // In terminal :-
// 1. node app.js --help
// 2. node app,js add
// 2. node app,js remove
// 2. node app,js list
// 2. node app,js read