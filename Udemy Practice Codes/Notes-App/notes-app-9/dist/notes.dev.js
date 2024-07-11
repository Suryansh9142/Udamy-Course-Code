"use strict";

var fs = require('fs');

var chalk = require('chalk');

var _require = require('process'),
    title = _require.title;

var getNotes = function getNotes() {
  return 'Your notes...';
};

var addNote = function addNote(title, body) {
  var notes = loadNotes(); // const duplicateNotes = notes.filter((note) => note.title === title)

  var duplicateNote = notes.find(function (note) {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('new title taken!'));
  } else {
    console.log(chalk.yellow.inverse('Notes title taken!'));
  }
}; // In Terminal :-
// 
// node app.js add --title="t" --body="b"
// node app.js add --title="List" --body="Sweater, Pants"
// node app.js add --title="List 2" --body="Sweater, Pants"


var removeNote = function removeNote(title) {
  var notes = loadNotes();
  var notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.greenBright.inverse('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.yellow.inverse('No note found!'));
  }
}; // In Terminal :-
// 
// node app.js remove --title="t" --body="b"
// node app.js remove --title="List" --body="Sweater, Pants"
// node app.js remove --title="List 2" --body="Sweater, Pants"


var listNotes = function listNotes(title) {
  var notes = loadNotes();
  console.log(chalk.green.inverse('your Notes'));
  notes.forEach(function (note) {
    console.log(note.title);
  });
};

var readNote = function readNote(title) {
  var notes = loadNotes();
  var note = notes.find(function (note) {
    return note.title === title;
  });

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Notes not found!'));
  }
};

var saveNotes = function saveNotes(notes) {
  var dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

var loadNotes = function loadNotes() {
  try {
    var dataBuffer = fs.readFileSync('notes.json');
    var dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};