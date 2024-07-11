// 1)

// const yargs = require('yargs')

// yargs.command({
//     command: 'add',
//     describe: 'Adding a note',

//     builder: {
//         title:{
//             describe: 'Notes Title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         // console.log(`Title: ${argv.title}`)
//         console.log(`Title: ` + argv.title)
        
//     }
// })

// yargs.command({
//     command: 'remove',
//     describe: 'Removing a note',
//     builder: {
//         title:{
//             describe: 'Notes Title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log(`Title: ` + argv.title)
//     }
// })

// yargs.command({
//     command: 'list',
//     describe: 'list the items',
//     builder: {
//         title:{
//             describe: 'Notes Title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log(`Title: ` + argv.title)
//     }
// })

// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     builder: {
//         title:{
//             describe: 'Notes Title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log(`Title: ` + argv.title)
//     }
// })

// yargs.parse()

// In Terminal :-
// 1. node app.js --help
// 2. node app.js add
// 3. node app.js add --title="This is title"



// 2) Q) challenge: add an option to yargs
// 
// 1. Setup a body option for the add command
// 2. Configure a description, make it require, an dfor it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

const yargs = require('yargs')

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
    handler: function(argv){
        // console.log(`Title: ${argv.title}`)
        // console.log(`Body: ${argv.body}`)
        console.log(`Title: ` + argv.title)
        console.log(`Body: ` + argv.body)
    }
})

yargs.parse()


// In Terminal :-
// 1. node app.js --help
// 2. node app.js add
// 3. node app.js add --title="This is title" --body="This is body" 