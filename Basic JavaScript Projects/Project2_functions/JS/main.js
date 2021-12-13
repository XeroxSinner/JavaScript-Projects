var Cat1="Oscar", Cat2="Rutabaga", Fish1="Lil Peach"; Fish2="Chocolat";


//MY WORK
function Color_Test() {
    var newtext = "Now this text is replaced AND red.";
    var textend = newtext.fontcolor("red");
    document.getElementById("ptext").innerHTML = textend;
}    


//EXAMPLE
function Button() {
    var str = "This text is green.";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

//EXAMPLE - CONCATENATE
function myConc(){
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Conc").innerHTML = sentence;
}

//MY CONC FUNCTION
function ConcWork(){  //Defines function
    var six = "6"; //Defines Variable 'six' as static character
    document.getElementById("Conc_Work").innerHTML += six += " "; //Defines what to do on click.. adding '6' and a space.
}