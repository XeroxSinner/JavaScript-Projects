// Ternary function example as copied from assignment
function ride_function(){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

// Another ternary funciton example, utilizing vote.
function vote_function(){
    var age, can_vote; //defines variables utilized
    age = document.getElementById("age").value; //Ties 'age' var to the input field in the HTML
    can_vote = (age >= 18) ? "You are eligible":"You are ineligible"; //Ties 'can_vote' var to the ternary operator eligible/ineligible
    document.getElementById("vote").innerHTML = can_vote + " to vote."; //Shows the results from 'can_vote' in the p element with the id 'vote'
}

// Keyword, this, and new code as copied from the assignment
function vehicle(make, model, year, color){
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var jack = new vehicle('dodge','charger',2020,'grey');
var emily = new vehicle('jeep', 'wrangler', 2015, 'green');
var erik = new vehicle('ford','mustang',2022,'red');

function car_function(){
    document.getElementById("keywords").innerHTML = "Erik drives a " + erik.vehicle_color + " " + erik.vehicle_model + " made in " + erik.vehicle_year + ".";
}


// New Keyword Assignment
function dog(name, breed, age, sex){ //Identifies the function 'dog' as a class and the objects associated with it
    this.dog_name = name;
    this.dog_breed = breed;
    this.dog_age = age;
    this.dog_sex = sex;
}

var brick = new dog('Brick','Rott', 13,'male'); //Making objects to be referenced by 'new_this_function'
var duchess = new dog('Duchess','catahoula',7,'female');

function new_this_function(){ //Returns specific object identifiers to the p id'd as 'new_and_this' in the HTML
    document.getElementById('new_and_this').innerHTML = 'This first dog is ' + brick.dog_name + ' and they are a ' + brick.dog_age + ' year old ' + brick.dog_breed + '.';
}

//Test code for Reserved keywords. Originally had 'true' but that borks everything. Replaced with 'abstract' though that still seems to work.
//Code not displayed in HTML however left for note's sake.
var abstract = new dog('Abst','catahoula',7,'female');

function reserved_function(){
    document.getElementById('reserved').innerHTML = 'This first dog is ' + true.dog_name + ' and they are a ' + true.dog_age + ' year old ' + true.dog_breed + '.';
}


//Nested function exercise.
function nested_function(){ //Main function called by button click in HTML
    document.getElementById('nested').innerHTML = count(); //Prints results to p id'd with 'nested' in HTML
    function count() { //Second function nested within
        var starting = 3; //Sets 'starting' as a variable with set value
        function plus_one() {starting += 1;} //Third nested function, pulls the value from 'starting' and adds one
        plus_one(); //Not entirely sure the specifics on this, noted for personal study
        return starting; //ends the function and returns the value to the original caller
    }
} // Would like to learn how to loop this and change starting to the var returned by the function.



