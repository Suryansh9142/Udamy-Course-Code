// Q)Challange: work with JSON and the file system
// 
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwright the original data
// 4. Test your work by viewing data in the JSON file
// 


// Creating some data

// const fs = require('fs')

// const intro = {
//     name:"Andrew",
//     planet:"Earth",
//     age : 27
// }

// // Inserting the data
// const bookJSON = JSON.stringify(intro)
// fs.writeFileSync('2-json.json', bookJSON)

// // Reading the JSON file
// const dataBuffer = fs.readFileSync('2-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)
 


// Updating the data 
const fs = require('fs')

const dataBuffer = fs.readFileSync('2-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Suryansh'
data.age = '19'

const updateData = JSON.stringify(data)
fs.writeFileSync('2-json.json', updateData)