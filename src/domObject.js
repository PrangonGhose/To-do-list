import Storage from './localStorage.js';

// grab all elements
export const toDoPlaceholder = document.querySelector('.to-do-placeholder');
export const taskItem = document.querySelector('.add-to-list');

// empty array
export let array; // eslint-disable-line

// display the todo in the DOM;
export default class UI {
  constructor(todoArr = Storage.getStorage()) {
    this.todoArr = todoArr;
    array = todoArr;
  }

  arrayChanger() {
    if (this.todoArr !== array) {
      array = this.todoArr;
    }
  }

  displayData(todoArr = this.todoArr) {
    const toDoPlaceholder = document.querySelector('.to-do-placeholder');
    const displayData = todoArr.map(UI.displayOnDom);
    toDoPlaceholder.innerHTML = (displayData).join(' ');
  }

  static displayOnDom(item) {
    let displayHTML;
    if (item.completed) {
      displayHTML = `<div class="task-items flex">
      <input type="checkbox" name="task${item.index}" id="task${item.index}" class="check" checked><label for="task${item.index}" class="line-through">${item.description}</label><div class="logo flex"><i class="fa fa-trash remove" aria-hidden="true" id="${item.index}"></i><i class="fa fa-ellipsis-v move" aria-hidden="true"></i></div></div>`;
    } else {
      displayHTML = `<div class="task-items flex">
      <input type="checkbox" name="task${item.index}" id="task${item.index}" class="check"><label for="task${item.index}">${item.description}</label><div class="logo flex"><i class="fa fa-trash remove" aria-hidden="true" id="${item.index}"></i><i class="fa fa-ellipsis-v move" aria-hidden="true"></i></div></div>`;
    }
    return displayHTML;
  }

  displayNothing = () => {
    const displayData = '<h3 class="display-nothing">You have no task to show</h2>';
    toDoPlaceholder.innerHTML = displayData;
  }

  clearInput = () => {
    const taskItem = document.querySelector('.add-to-list');
    taskItem.value = '';
  }

  clearCompleted() {
    const len = array.length;
    let someArray = [];
    let any = 0;
    for (let i = 0; i < len; i += 1) {
      if (array[i].completed) {
        someArray = this.removeArrayTodo(i + 1);
        any += 1;
      }
    }
    if (any !== 0) {
      array = someArray;
    }
    for (let i = 0; i < array.length; i += 1) {
      array[i].index = i + 1;
    }
    Storage.addTodStorage(array);
    if (array.length === 0) {
      this.displayNothing();
    } else {
      this.displayData(array);
    }
    return array;
  }

  removeTodo() {
    const toDoPlaceholder = document.querySelector('.to-do-placeholder');
    toDoPlaceholder.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
        const btnId = e.target.id;
        // remove from array.
        array = this.removeArrayTodo(btnId);
        for (let i = 0; i < array.length; i += 1) {
          array[i].index = i + 1;
        }
        Storage.addTodStorage(array);
        if (array.length === 0) {
          this.displayNothing();
        } else {
          this.displayData(array);
        }
      } if (e.target.classList.contains('check')) {
        const checkVal = document.getElementById(e.target.id);
        const matches = e.target.id.match(/(\d+)/); // extracting numbers
        const matchIndex = +matches[0];
        const { labels } = checkVal;
        const labelsArray = Array.from(labels);
        for (let i = 0; i < labelsArray.length; i += 1) {
          labelsArray[i].classList.toggle('line-through');
          if (labelsArray[i].classList.contains('line-through')) {
            for (let i = 0; i < array.length; i += 1) {
              if (array[i].index === matchIndex) {
                array[i].completed = true;
              }
            }
            Storage.addTodStorage(array);
          } else {
            for (let i = 0; i < array.length; i += 1) {
              if (array[i].index === matchIndex) {
                array[i].completed = false;
              }
            }
            Storage.addTodStorage(array);
          }
        }
      }
      return array;
    });
  }

  removeArrayTodo(id) {
    const newArray = this.todoArr.filter((item) => item.index !== +id);
    this.todoArr = newArray;
    if (this.todoArr.length === 0) {
      this.displayNothing();
    }
    return this.todoArr;
  }
}