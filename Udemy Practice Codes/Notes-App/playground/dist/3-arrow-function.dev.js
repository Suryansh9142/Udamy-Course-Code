"use strict";

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script
var tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  // 1) method :-
  // getTaskToDo() {
  //     const tasksToDo = this.tasks.filter((task) => {
  //         return task.completed == false
  //     }) 
  //     return tasksToDo
  // }
  // 2) 
  // getTaskToDo() {
  //     return tasksToDo = this.tasks.filter((task) => {
  //         return task.completed == false
  //     }) 
  // }
  // 3)
  getTaskToDo: function getTaskToDo() {
    return tasksToDo = this.tasks.filter(function (task) {
      return task.completed == false;
    });
  }
};
console.log(tasks.getTaskToDo());