"use strict";

var validator = require('validator');

var emailTrue = validator.isEmail('suryanshmishra003@gmail.com');
var emailFalse = validator.isEmail('suryanshmishra003#gmail.com');
console.log(emailTrue, ',', emailFalse);
var urlTrue = validator.isURL('http://facebook.com');
var urlFalse = validator.isURL('http/facebook.com');
console.log(urlTrue, ',', urlFalse);