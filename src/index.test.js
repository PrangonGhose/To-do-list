/**
 * @jest-environment jsdom
 */

import addToForm, { uiObject } from './formAdd.js';

document.body.innerHTML = `
<form class="add-form">
<input type="text" placeholder="Add to your list..." class="add-to-list">
</form>
<hr class="full-hr">
<form class="to-do-placeholder flex">
</form>
`;

const taskItem = document.querySelector('.add-to-list');

describe('add and remove', () => {
  uiObject.removeTodo();

  test('Correctly add first task to the DOM', () => {
    taskItem.value = 'task1';
    addToForm(taskItem);
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(1);
  });

  test('Correctly add second task to the DOM', () => {
    taskItem.value = 'task2';
    addToForm(taskItem);
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(2);
  });

  test('Correctly add third task to the DOM', () => {
    taskItem.value = 'task3';
    addToForm(taskItem);
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(3);
  });

  test('Correctly add fourth task to the DOM', () => {
    taskItem.value = 'task4';
    addToForm(taskItem);
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(4);
  });

  test('Correctly add fourth task to the DOM', () => {
    taskItem.value = 'task5';
    addToForm(taskItem);
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(5);
  });

  test('Correctly add fourth task to the DOM', () => {
    taskItem.value = 'task5';
    addToForm(taskItem);
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(6);
  });

  test('Correctly add fourth task to the DOM', () => {
    taskItem.value = 'task5';
    addToForm(taskItem);
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(7);
  });

  test('Correctly Remove task from the DOM', () => {
    const removeButton = document.querySelector('.remove');
    removeButton.click();
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(6);
  });

  test('Correctly Remove task from the DOM', () => {
    const removeButton = document.querySelector('.remove');
    removeButton.click();
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(5);
  });

  test('Correctly Remove task from the DOM', () => {
    const removeButton = document.querySelector('.remove');
    removeButton.click();
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(4);
  });

  test('Correctly Remove task from the DOM', () => {
    const removeButton = document.querySelector('.remove');
    removeButton.click();
    const taskValue = document.querySelectorAll('.task-items');
    expect(taskValue).toHaveLength(3);
  });
});
