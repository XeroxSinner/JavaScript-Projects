function setup() {
    canvasart();
}

// ---------------------------------------------

function animal_function(){
    var animal_output;
    var text = document.getElementById('animal_input').value;
    var animals = text.toLowerCase();
    var animal_string = ", oh my!";
    switch(animals) {
        case "lion":
            animal_output = "Lion" + animal_string;
        break;
        case "tiger":
            animal_output = "Tiger" + animal_string;
        break;
        case "bear":
            animal_output = "Bear" + animal_string;
        break;
        default:
            animal_output = document.getElementById('animal_input').value + " isn't one I recognize.";
    }
    document.getElementById('animal_output').innerHTML = animal_output;
}

//- GetElementByClass (238)
function change(){
    var x = document.getElementsByClassName('click');
    x[0].innerHTML = "Text change."; //Can I declare two index values in that bracket somehow? [0,2] didn't work.
    x[2].innerHTML = "Text change.";
}

function canvasart(){
    var c = document.getElementById("mycanvas");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0,0,500,0);
    grd.addColorStop(0,"turquoise");
    grd.addColorStop(1,"black");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,500,500);
}