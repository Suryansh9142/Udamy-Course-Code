const fs = require('fs')

fs.writeFileSync('notes.txt', 'This the notes text file we created!')

fs.appendFileSync('notes.txt', ` Hey it's me :)`)