const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
// const chalk = require('chalk')

// Creating add command

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title:{
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Notes Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Creating Remove command 

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title:{
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title, argv.body)
    }
})


// Listing the notes

yargs.command({
    command: 'list',
    describe: 'Listing the note',
    handler(argv){
        notes.listNotes(argv.title, argv.body)
    }
})

// Reading the notes

yargs.command({
    command: 'read',
    describe: 'Reading the notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()