//Pop-Up Window
window.alert("Hello, World.. from the external script, window alert.");

//Basic text on screen
document.write("Document write method.");

//Defining a variable and displaying it
var A="<br><br><br>String associated with variable A, \"But now,\" she said, \"We're escaping shit.\" " 
+ "I\'m unsure the need to concatenate here. "
+ "But ok. Now I get it.";
document.write(A);

//Window alert again, but with a variable w/ string
var B="Another window alert";
window.alert(B);

//Defining multiple variables
var Cat1="Oscar", Cat2="Rutabaga", Fish1="Lil Peach"; Fish2="Chocolat";
document.write("<br><br>" + Cat2);

//Using old methods to assign colors to existing variables and displaying them
var Cat1=Cat1.fontcolor("red");
var Cat2=Cat2.fontcolor("orange");
var Fish1=Fish1.fontcolor("yellow");
var Fish2=Fish2.fontcolor("green");
document.write("<br><br>" + Cat1 + "<br><br>" + Cat2 + "<br><br>" + Fish1 + "<br><br>" + Fish2);

//Printing a basic expression on screen
document.write("<br><br> An expression: " + (3 + 3));