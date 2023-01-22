$(document).ready(function () {

    var todos = [];
    function Todo(task) {
        this.task = task;
    }

    //Add new Todo
    function addNewTodo(task) {
        var t = new Todo(task);
        todos.push(t);
        saveTodos();
    }

    //Remove Todo
    function removeTodo(index) {
        todos.splice(index, 1);
        saveTodos();
    }

    //Get Todo
    function getTodo(index) {
        return todos[index];
    }










});