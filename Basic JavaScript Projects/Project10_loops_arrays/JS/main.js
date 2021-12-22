function function_bank(){ //Function to run specific functions on-load
    str_length();
    for_loop();
    array();
    break_statement();
    obj();
    continue_statement();
}

// ---------------------------------------------------------------------------

function call_loop(){ //Basic loop - Displays 1 through 10
    var digit = '';
    var x = 1;
    while (x<11){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById('loop').innerHTML=digit;
}

function str_length(){ // Identifies the string length of the specific h3 element
    var x = document.getElementById('h3').innerHTML;
    document.getElementById('st_length').innerHTML= x.length;
}


function for_loop(){ //Another loop - Display element in the array until complete
    let pets = ['dog','cat','fish','birds','turtle','frog'];
    var text = '';
    var x;
    for (x=0; x < pets.length; x++) {
        text += pets[x] + "<br>";
    }
    document.getElementById('for_loop').innerHTML=text;
}

function array(){ //Creates an array and utilizes list to add elements
    var list =[]
    list[0]="First item.";
    list[1]='Second item.';
    list[2]='Third item.';
    document.getElementById('array').innerHTML="This pulls the element at index 1 in the array: " + list[1];
}

function constant_function(){ //Utilizes const as opposed to var
    const pets = {species:'dog', color:'black', name:'Brick'};
    pets.species = 'cat';
    pets.sex = 'male'
    document.getElementById('constant').innerHTML = "The " + pets.sex + " " + pets.species + " is named " + pets.name + ".";
}

function break_statement() { //Utilizes break functionality, will stop loop once specified condition has been met
    let text = "";
    for (let x=0; x < 10; x++) {
        if (x===3) { break; }
        text += "Numbers: " + x + "<br>";
    }
    document.getElementById('breakstate').innerHTML = text;
}

function obj() { //Return function
    let dog = {
        breed: "husky",
        temperment: "chatty",
        name:'Brick',
        desc : function() {
            return this.name + " is a " + this.temperment + ' ' + this.breed + ".";
        }
    };
    document.getElementById('returns').innerHTML = dog.desc();
}

function continue_statement() { //Utilizes continue functionality, will skip one interation of the loop yet continue on
    let text = '';
    for (let x=0; x<6; x++) {
        if (x===3) { continue; }
        text += "Numbers: " + x + "<br>";
    };
    document.getElementById('continue').innerHTML = text;
}

