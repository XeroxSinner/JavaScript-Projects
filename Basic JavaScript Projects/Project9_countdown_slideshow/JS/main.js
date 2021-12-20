// Code from previous countdown exercise
function countdown(){
    var seconds = document.getElementById('seconds').value;
    
    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick,1000);
        if (seconds == -1){
            alert('Timer\'s Done!');
            clearTimeout(time);
            timer.innerHTML="";
        }
    }
    tick();
}


//Slideshow code 
var slideindex = 0; //Defines slideindex as a working variable with a starting value of 0
function showSlides() { 
    var i; //Defines i as usable variable
    var slides = document.getElementsByClassName("demoslides"); //Defines variable 'slides' as utilizing the class in the HTML 'demoslides'
    var dots = document.getElementsByClassName('dot'); //Defines variable 'dots' as utilizing the class in the HTML 'dot'
    for (i = 0; i < slides.length; i ++){  //Sets i to a starting value of 0; if value of i is less than current value of slides, add one to value of i
        slides[i].style.display = 'none'; //Slides with the property of i are set to not display
    }
    slideindex++; //Add one to the value of slideindex
    if (slideindex > slides.length) {slideindex = 1} //Functionally, this creates the loop for the images. When slideindex value becomes greater than the number of slides, reset slideindex to 1
    for (i = 0; i < dots.length; i++) { //Matches the three HTML dot elements with an image by tying the same value of var i
        dots[i].className = dots[i].className.replace(' active',''); //For 'dot' elements that contain ' active' as part of the class, remove it and replace with ' '
    }
    slides[slideindex-1].style.display='block'; // Displays specific 'slides' element (identified as slideindex-1), as opposed to line 26 calling for display:none
    dots[slideindex-1].className += ' active'; // += assigns ' active' as an *additional* class to dots. In the CSS, .active changes color of the element
    setTimeout(showSlides, 3500); //Basic timer function, showSlides() to run every 3.5 seconds.
}