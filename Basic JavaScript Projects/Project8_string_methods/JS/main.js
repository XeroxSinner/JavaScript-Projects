//Concat function (159)
function concat_function(){ //Defines function name
    var a = "This is three "; //Defines variables
    var b = "variables made into ";
    var c='a single sentence.';
    var whole = a.concat(b,c); //Defines order of concatenation
    document.getElementById('concat').innerHTML=whole; //HTML element association
}

//Slice Function (160)
function slice_function(){
    var a = 'Here\'s a sentence with a bunch of stuff.'; //For single use case, could have used 'let str =' would use str.slice in following line.
    document.getElementById('slice').innerHTML = a.slice(7,25); //Used format on W3 rather than create a second var.
}

//toUpperCase() (162)
function upper_case() {
    var up = 'Misc text to make all caps.';
    document.getElementById('upper').innerHTML = up.toUpperCase();
}

//Search Method (162)
function search(){
    var a = 'Tell me what position';
    document.getElementById('search').innerHTML = a.search('what');
}

//toString Method (163)
function to_string(){
    var a = 132347;
    document.getElementById('string').innerHTML = a.toString();
}

//toPrecision Method (165)
function precision(){
    var a = 168.365448963212;
    document.getElementById('prec').innerHTML = a.toPrecision(6);
}

//toFixed Method (167)
function fixed(){
    var a = 4.236;
    document.getElementById('fix').innerHTML = a.toFixed(6);
}

//valueOf Method (167) - Noted on W3 that it's not normally used in code, 
function valueof(){
    var a = 'This is a primitive string, valueOf will not change it.';
    document.getElementById('value').innerHTML = a.valueOf();
}