"use strict";

var notes = require('./notes.js');

var yargs = require('yargs');

var chalk = require('chalk'); // const chalk = require('chalk')
// Creating add command


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
    notes.addNote(argv.title, argv.body);
  }
}); // Creating Remove command 

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
}); // Listing the notes

yargs.command({
  command: 'list',
  describe: 'Listing the note',
  handler: function handler(argv) {
    notes.listNotes(argv.title, argv.body);
  }
});
yargs.parse();