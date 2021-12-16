// This is a mess, how to page break?
document.write(typeof "dog");
document.write("13"+13);


//Not a Number Excercise.
function nan_function(){
    document.getElementById("nan").innerHTML = 0/0;
    document.getElementById("nan").innerHTML += "<br>" + isNaN('words');
    document.getElementById("nan").innerHTML += "<br>" + isNaN('1365');
} // Is there a cleaner way to do this?

function inf_function(){
    document.getElementById("inf").innerHTML = 2E310;
}  //Necessary to define a function and event handler in HTML *always*?

function neginf_function() {
    document.getElementById("neginf").innerHTML = -2E310;
}

function bool_funct() {
    document.getElementById("bool").innerHTML = (3>1);
    document.getElementById("bool").innerHTML += "<br>" + (1>3);
}

console.log(6+5);
console.log(1>3);

function double(){
    document.getElementById("double").innerHTML = (10==10);
    document.getElementById("double").innerHTML += "<br>" + ((3+6)==4);
}

function triple(){
    document.getElementById("triple").innerHTML = ('three'==='three');
    document.getElementById("triple").innerHTML += "<br>" + (3==='word');
    document.getElementById("triple").innerHTML += "<br>" + (3==='3');
    document.getElementById("triple").innerHTML += "<br>" + (3===4);
} //I feel like this is a mess too, is there a cleaner way to display this?

function or(){
    document.getElementById("or").innerHTML = (5>4 || 2>4);
    document.getElementById("or").innerHTML += "<br>" + (2>4 || 1>3);
}

function and(){
    document.getElementById("and").innerHTML = (5>4 && 2<4);
    document.getElementById("and").innerHTML += "<br>" + (2>4 && 1>3);
}

function not(){
    document.getElementById("not").innerHTML = !(3>1);
    document.getElementById("not").innerHTML += "<br>" + !(1>3);

}