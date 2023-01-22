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
            var todo = todos[i];
            var task = todo.task;
            html += "<li>" + task + "</li>";
        }
        $("#list-todos").html(html);
    }

    //click event for input
    $("#add-todo-form").submit(function (e) {
        e.preventDefault(); // Prevents the default behavior!
        var name = $("#todo-task").val();
        // validate...
        addNewTodo(name);
        listTodos();
    });



    //Display Date
    function displayDate() {
        let date = new Date()
        date = date.toString().split(" ")
        $("#date").html(date[1] + " " + date[2] + " " + date[3]);
        //console.log(date)
    }

    window.onload = function () {
        displayDate();
    }



    //Display Time
    function displayTime() {
        var date = new Date();
        var h = ('0' + date.getHours()).slice(-2);
        var m = ('0' + date.getMinutes()).slice(-2);
        var s = ('0' + date.getSeconds()).slice(-2);

        var time = h + ":" + m + ":" + s;
        $('#hours').text(time);
    }

    displayTime();
    setInterval(displayTime, 1000)


    //Codes for testing purposes

    //Delete Todos
    //    $("li").click(function () {
    //     $(this).parent().fadeOut(500, function () {

    //     });
    //     e.stopPropagation();
    // });


    // addNewTodo("Groceries"); //0
    // addNewTodo("Finish coding project"); //1
    // addNewTodo("Find a nice job"); //2
    // addNewTodo("Go out on dates"); //3
    // listTodos();
    // console.log("******");
    // removeTodo(1);
    // listTodos();

});