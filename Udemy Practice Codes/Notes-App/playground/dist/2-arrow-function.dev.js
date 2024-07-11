"use strict";

// 1) First method of Function
// const square = function (x) {
//     return x * x
// }
// 2) Second method of function
// const square = (x) => {
//     return x * x
// }
// 3) Third method of function
// const square = (x) => x * x
// console.log(square(2))
// 4) 1)Object
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         // this function (This.name) will take the value form out side because the is the common function is applied ( function () { } )
//         console.log('Guest list for ' + this.name)
//     }
// }
// event.printGuestList()
// 4) 2) 
// const event = {
//     name: 'Birthday Party',
//     printGuestList() {
//         // this is not a function, it's just using alternative syntex that's available to us when we settingup the methods on objects.
//         console.log('Guest list for ' + this.name)
//     }
// }
// event.printGuestList()
// 4) 3)
// const chalk = require('chalk')
// import chalk from 'chalk';
// const chalkModule = import('chalk');
var event = {
  name: 'Birthday Party',
  guestList: ['Suryansh', 'Aman', 'Harsh', 'Monu', 'vaibhav'],
  printGuestList: function printGuestList() {
    var _this = this;

    // this is not a function, it's just using alternative syntex that's available to us when we settingup the methods on objects.
    console.log('Guest list for ' + this.name);
    this.guestList.forEach(function (guest) {
      console.log(guest + ' is attending ' + _this.name);
    });
  }
};
event.printGuestList();