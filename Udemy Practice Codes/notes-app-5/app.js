// 1)

// import chalk from 'chalk';
// const topic = chalk.blue.inverse('Getting input from users')

// console.log(topic)

// console.log(process.argv)


// 2)

// console.log(process.argv[2])


// 3)

import chalk from 'chalk';
const topic = chalk.blue.inverse('Getting input from users')

const command = process.argv[2]
console.log(command)

console.log(process.argv)

if(command === 'add'){
    console.log('Adding a new note')
}else if(command === 'remove'){
    console.log('Removing a note')
}


// IN terminal command :-

// 1) node app.js .
// 2) node app.js suryansh .
// 3) node app.js add .
// 4) node app.js remove .
// 5) node app.js add --title="This is my title"
// 5) node app.js add --title="This is my title" --body="This is a body"s