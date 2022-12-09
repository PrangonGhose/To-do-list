// Import modules
import Todo from './todoObject.js';
import Storage from './localStorage.js';
import UI, { array } from './domObject.js';
import './style.css';

// Grab all elements
const form = document.querySelector('.add-form');
const taskItem = document.querySelector('.add-to-list');
const reload = document.querySelector('.reload');
const clear = document.querySelector('.clear');

// Declare variables
let todoArr = Storage.getStorage(); // array to store all tasks
const uiObject = new UI(); // object to be displayed in the DOM
let index; // index of the task
if (todoArr.length !== 0) {
  for (let i = 0; i < todoArr.length; i += 1) {
    index = todoArr[i].index;
  }
  index += 1;
} else {
  index = 1;
}
const completed = false; // status of the task

// form part
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (array !== todoArr) {
    todoArr = array;
  }
  if (todoArr.length !== 0) {
    for (let i = 0; i < todoArr.length; i += 1) {
      index = todoArr[i].index;
    }
    index += 1;
  } else {
    index = 1;
  }
  const todo = new Todo(taskItem.value, completed, index); // new task object instance
  todoArr = [...todoArr, todo]; // push to array
  uiObject.todoArr = todoArr; // passing updated array value to DOM object
  uiObject.arrayChanger();
  uiObject.displayData(); // displaying new data in the DOM
  uiObject.clearInput();
  Storage.addTodStorage(todoArr); // add to storage
  index += 1;
});

// page reload
reload.addEventListener('click', () => {
  window.location.reload();
});

// once the browser is loaded
window.addEventListener('DOMContentLoaded', () => {
  uiObject.todoArr = todoArr;
  if (todoArr.length === 0) {
    uiObject.displayNothing();
  } else {
    uiObject.displayData(todoArr);
  }
  // remove from the dom
  uiObject.removeTodo();
});

// clear all
clear.addEventListener('click', () => uiObject.clearCompleted());