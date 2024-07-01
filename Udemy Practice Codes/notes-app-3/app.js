const validator = require('validator')

const emailTrue = validator.isEmail('suryanshmishra003@gmail.com')
const emailFalse = validator.isEmail('suryanshmishra003#gmail.com')

console.log(emailTrue,',',emailFalse)

const urlTrue = validator.isURL('http://facebook.com')
const urlFalse = validator.isURL('http/facebook.com')

console.log(urlTrue,',',urlFalse)