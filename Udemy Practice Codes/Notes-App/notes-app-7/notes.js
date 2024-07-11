const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new title taken!'))
    } else {
        console.log(chalk.red.inverse('Notes title taken!'))
    }

    // notes.push({
    //     title: title,
    //     body: body
    // })

    // saveNotes(notes)
}

// In Terminal :-
// 
// node app.js add --title="t" --body="b"
// node app.js add --title="List" --body="Sweater, Pants"
// node app.js add --title="List 2" --body="Sweater, Pants"

const removeNote = function (title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes (notesToKeep)
        // console.log('Note removed!')
        // saveNotes (notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
        // console.log('No note found!')
    }
}

// In Terminal :-
// 
// node app.js remove --title="t" --body="b"
// node app.js remove --title="List" --body="Sweater, Pants"
// node app.js remove --title="List 2" --body="Sweater, Pants"


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) { 
        return [] 
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}