//Local vs Global Variable Exercise (144)
var x = 13 //Assigns Global Variable
function add_numbers_1() {
    document.write(20 + x + "<br>");
}

function add_numbers_2(){
    document.write(x + x + "<br>");
}

function add_numbers_3(){
    var y = 3 //Assigns local variable
    document.write(y + y + "<br>");
}

function add_numbers_4(){ //Function with intentional error, printed to console.log for verification of error
    document.write(3 + y); //Pulls from undefined variable since y is local to previous function
    console.log(4 + y);
}

add_numbers_1();
add_numbers_2();
add_numbers_3();
add_numbers_4();

//IF/Else Exercise (150)
function get_date(){ //Function as shown in assignment
    if (new Date().getHours() < 18) {
        document.getElementById('greeting').innerHTML = "How are you today?";
    }
}

function get_year(){ //Personal assignment
    if (new Date().getDay() >= 5 ) { //IF the day of the week is Friday, Sat, or Sunday..
        document.getElementById('day').innerHTML = "Weekend time.";
    }
}

function books_read(){ //Re-written IF/ELSE
    books = document.getElementById('books').value;
    if (books >= 10) {
        total = "That's a lot!";
    }
    else {
        total = "There's still time for one more.";
    }
    document.getElementById('total_books').innerHTML=total;
}

//ELSE IF Assignments (152) - Written from Assignment as specified on pg 153
function time_function(){
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0){ // Specifies time being between midnight and noon
        reply = 'It\'s morning!';
    }
    else if (time >= 12 == time < 18){ //If time isn't between 0 and 12, function continues to look
        reply = 'It\'s afternoon!';
    }
    else { //If no previous conditions are met, this should be what the function executes
        reply = 'It\'s evening!';
    }
    document.getElementById('time_of_day').innerHTML = reply
}
