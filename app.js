$(document).ready(function () {

    var todos = [];
    function Todo(task) {
        this.task = task;
        this.id = generateId;
    }

    //Adding a new task
    function addNewTask(task) {
        const allTodos = getAllTodosFromLs()
        allTodos.push(new Todo(task))
        setTodosToLs(allTodos)

    }

    //Remove Task
    function removeTaskById(receiveId) {
        const allTodos = getAllTodosFromLs()
        const updatedList = allTodos.filter(td => td.id !== receiveId)
        setTodosToLs(updatedList)
    }

    //Save data to localStorage
    function setTodosToLs(todosList) {
        const stringifyTodosList = JSON.stringify(todosList)
        localStorage.setItem('todos', stringifyTodosList)
    }

    //Get all todos from localStorage
    function getAllTodosFromLs() {
        return JSON.parse(localStorage.getItem('todos') || '[]')
    }

    //List Todos
    function loadUi() {
        const allTodos = getAllTodosFromLs()
        if (allTodos.length === 0) {
            return
        }

        allTodos.forEach(
            (item, index) => {
                const newTodoHtml = $(`<li id="li-${item.id}">${item.task}<button id="btn-${item.id}" class="btn btn-dark">Remove</button></li>`)
                $("#list-todos").append(newTodoHtml)
                $("#btn-" + item.id).on("click", function () {
                    $(this).parent().remove()
                    removeTaskById(item.id)
                })
            }
        )
    }
    loadUi();

    //Updated task 
    function updateTaskById(id, updatedTask) {
        const allTodos = getAllTodosFromLs()
        const updatedList = allTodos.map(td => {
            if (
                td.id === id
            ) {
                td.task = updatedTask
                return td
            }
            return td
        })
        setTodosToLs(updatedList)
    }

    function getById(id) {
        const allTodos = getAllTodosFromLs()
        return allTodos.find(td => td.id === id)
    }

    function generateId() {
        const allTodos = getAllTodosFromLs()
        return allTodos.length
    }

    document.addNewTask = addNewTask
    document.removeTaskById = removeTaskById
    document.updateTaskById = updateTaskById
    document.getById = getById


    //Input button functionality
    $("#btn").on("click", function () {
        const myId = generateId()
        const inputText = $("#todo-task").val()
        console.log(inputText)
        const newTodoHtml = $(`<li id="li-${myId}">${inputText}<button class="btn btn-dark" id="btn-${myId}">Remove</button></li>`)
        $("#list-todos").append(newTodoHtml)
        addNewTask(inputText)
        $("#btn-" + myId).on("click", function () {
            $(this).parent().remove()
            removeTaskById(myId)
        })
    })

    //Display Date
    function displayDate() {
        let date = new Date()
        date = date.toString().split(" ")
        //document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
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


});