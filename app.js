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

    //Initialize todo app
    getTodos();
    listTodos();


    //List Todos
    function listTodos() {
        var html = "";
        for (var i in todos) {
            //console.log(todos[i].name);
            var todo = todos[i];
            var task = todo.task;
            //            var completed = todo.completed;
            //            html += "<li>" + task + " <span>" + completed + "</span></li>";
            html += "<li>" + task + "</li>";
        }
        $("#list-todos").html(html);
    }


    $("#add-todo-form").submit(function (e) {
        e.preventDefault(); // Prevents the default behavior!
        var name = $("#todo-task").val();
        // validate...
        addNewTodo(name);
        //        addNewTodo(task);
        listTodos();
    });







});