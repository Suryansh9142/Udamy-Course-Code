const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
        

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new title taken!'))
    } else {
        console.log(chalk.yellow.inverse('Notes title taken!'))
    }
}

// In Terminal :-
// 
// node app.js add --title="t" --body="b"
// node app.js add --title="List" --body="Sweater, Pants"
// node app.js add --title="List 2" --body="Sweater, Pants"

const removeNote = function (title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.greenBright.inverse('Note removed!'))
        saveNotes (notesToKeep)
    } else {
        console.log(chalk.yellow.inverse('No note found!'))
    }
}

// In Terminal :-
// 
// node app.js remove --title="t" --body="b"
// node app.js remove --title="List" --body="Sweater, Pants"
// node app.js remove --title="List 2" --body="Sweater, Pants"

const listNotes = (title) => {
    const notes = loadNotes()

    console.log(chalk.green.inverse('your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Notes not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
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
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}