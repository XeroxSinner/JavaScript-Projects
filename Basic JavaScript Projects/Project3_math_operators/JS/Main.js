function addition_function () {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function () {
    var subtraction = 5 - 7;
    document.getElementById("sub").innerHTML = "5 - 7 = " + subtraction;
}

function multiplication_function () {
    var multiplication = 4 * 7;
    document.getElementById("multi").innerHTML = "4 x 7 = " + multiplication;
}

function division_function () {
    var division = 90 / 9;
    document.getElementById("divide").innerHTML = "90 / 9 = " + division;
}

function multimath_function (){
    var multim = 8 / 4 - (9 + 6) * 2;
    document.getElementById("multimath").innerHTML = "8 divided by 4 minus nine plus six, times two is: " + multim;
}

function modulus_function(){
    var modu = 53 % 4;
    document.getElementById("modulus").innerHTML = "53 divided by 4 gives you a remainder of: " + modu;
}

function negation_function(){
    var neg = 10;
    document.getElementById("neg").innerHTML = "Negation operation: " + -neg;
}

function increment_function(){
    var inc = 13;
    inc++;
    document.getElementById("increment").innerHTML += inc;
}

function decrement_function(){
    var incr = 13;
    incr--;
    document.getElementById("decrement").innerHTML += incr;
}

function random_function(){
    document.getElementById("random").innerHTML += Math.floor(Math.random() * 100);
}

function mathmax_function(){
    document.getElementById("max").innerHTML += Math.max(3,9,13);
}

