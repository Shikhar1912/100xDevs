/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoArr = [];
  }

  add(todo) {
    this.todoArr.push(todo);
  }

  remove(index) {
    this.todoArr.splice(index, 1);
  }

  update(index, newVal) {
    if (index < this.todoArr.length - 1)
    this.todoArr[index] = newVal;
  }

  getAll() {
    return this.todoArr;
  }

  get(index) {
    if (index < this.todoArr.length)
      return this.todoArr[index];
    else return null;
  }

  clear() {
    this.todoArr = [];
  }
}


todoList = new Todo();

console.log(todoList);


module.exports = Todo;
