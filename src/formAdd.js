// Import modules
import Todo from './todoObject.js';
import Storage from './localStorage.js';
import UI, { array } from './domObject.js';

// Grab necessary elements

const taskItem = document.querySelector('.add-to-list');

// Declare variables
export let todoArr = Storage.getStorage(); // eslint-disable-line import/no-mutable-exports
export const uiObject = new UI(); // object to be displayed in the DOM
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

export default function addToForm(task = taskItem) {
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
  const todo = new Todo(task.value, completed, index); // new task object instance
  todoArr = [...todoArr, todo]; // push to array
  uiObject.todoArr = todoArr; // passing updated array value to DOM object
  uiObject.arrayChanger();
  uiObject.displayData(); // displaying new data in the DOM
  uiObject.clearInput();
  Storage.addTodStorage(todoArr); // add to storage
  index += 1;
  return todoArr;
}