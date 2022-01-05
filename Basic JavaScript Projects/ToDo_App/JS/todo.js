//Function gets new tasks from the input, creates an array, saves to local memory, makes task JS obj
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//Function adds task to the array, creates new variable, adds to end of array, converts to JSON string
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    return false;
}

//Function keeps tasks disp on screen; sets task as var, adds to unordered list, displays list in order of input, creates X button
function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    };    
    html += '<ul>';
    document.getElementById('todos').innerHTML = html

    var buttons = document.getElementsByClassName("remove");
    for (var j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('click', remove);
    };

}


//Displays tasks when Add is clicked
document.getElementById('add').addEventListener('click', add);
//Keeps elements on screen
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    
    return false;
}

