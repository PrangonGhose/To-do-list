import './style.css';

const toDoTasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 3,
  },
  {
    description: 'Complete the project',
    completed: false,
    index: 1,
  },
  {
    description: 'Take the dog to walk',
    completed: false,
    index: 5,
  },
  {
    description: 'Pay the bill',
    completed: false,
    index: 60,
  },
  {
    description: 'Pay the bill',
    completed: false,
    index: 4,
  },
  {
    description: 'Pay the bill',
    completed: false,
    index: 17,
  },
  {
    description: 'Pay the bill',
    completed: false,
    index: 15,
  },
  {
    description: 'Pay the bill',
    completed: false,
    index: 55,
  },
  {
    description: 'Pay the bill',
    completed: false,
    index: 2,
  },
];

function toDoFunc() {
  const toDoPlaceholder = document.querySelector('.to-do-placeholder');
  const toDoArray = [];
  for (let i = 0; i < toDoTasks.length; i += 1) {
    toDoArray.push(toDoTasks[i].index);
  }
  toDoArray.sort();
  for (let i = 0; i < toDoTasks.length; i += 1) {
    for (let j = 0; j < toDoTasks.length; j += 1) {
      if (toDoArray[i] === toDoTasks[j].index) {
        const element = document.createElement('div');
        element.innerHTML = `<input type="checkbox" name="task${toDoTasks[j].index}" id="task${toDoTasks[j].index}"><label for="task${toDoTasks[j].index}">${toDoTasks[j].description}</label><i class="fa fa-ellipsis-v" aria-hidden="true"></i>`;
        element.classList.add('task-items');
        element.classList.add('flex');
        const hr = document.createElement('hr');
        hr.classList.add('full-hr');
        toDoPlaceholder.appendChild(element);
        toDoPlaceholder.appendChild(hr);
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => toDoFunc());