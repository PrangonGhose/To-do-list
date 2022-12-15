// Import modules
import addToForm, { todoArr, uiObject } from './formAdd.js';
import './style.css';

// Grab all elements
const form = document.querySelector('.add-form');
const reload = document.querySelector('.reload');
const clear = document.querySelector('.clear');

// form part
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToForm();
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