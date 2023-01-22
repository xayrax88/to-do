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

    //Save data to localStorage
    function saveTodos() {
        var str = JSON.stringify(todos);
        localStorage.setItem("todos", str);
    }


    //Get data from localStorage
    function getTodos() {
        var str = localStorage.getItem("todos");
        todos = JSON.parse(str);
        if (!todos) {
            todos = [];
        }
    }










});