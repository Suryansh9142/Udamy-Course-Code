"use strict";

var notes = require('./notes.js');

var yargs = require('yargs');

var chalk = require('chalk'); // Creating add command


yargs.command({
  command: 'add',
  describe: 'Adding a note',
  builder: {
    title: {
      describe: 'Notes Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Notes Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(argv) {
    // console.log(`Title: ${argv.title}`)
    // console.log(`Body: ${argv.body}`)
    // console.log(`Title: ` + argv.title)
    // console.log(`Body: ` + argv.body)
    notes.addNote(argv.title, argv.body);
  }
}); // 1 Q) challenge: Setup command option and function
// 
// 1. Step the remove command to take a rrequire "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using:node.app.js remove --title="some title"
// 
// Q2) challenge: Wire up removeNote
// 
// 1. Load existing notes
// 2. Use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. test your work with a little that exists and a title that doesn't exist
// 
// Q3)challenge: Use chalk to provide usefull logs for remove
// 
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No notes found!" with a red backgrgound
// 
// Creating Remove command 

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Notes Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(argv) {
    notes.removeNote(argv.title, argv.body);
  }
});
yargs.parse();