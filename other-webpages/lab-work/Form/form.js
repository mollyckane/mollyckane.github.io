/*
 Lab Week 7
 script.js
 M Kane
 2/11/2025
*/

// note: I initially created an actual message display instead of the alert but later added both to display both.

//smooth loading
$(document).ready(function () {
    $('.loading-anim').fadeTo(1000, 1);
});

// prevent default refresh
var form = document.getElementById("form1");
function handleForm(event) { 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);

// show message and hide form
function showMessage(){
    event.preventDefault();
    // get input from user
    var usersName=document.getElementById("f1-name-input").value;
    var usersEmail=document.getElementById("f1-email-input").value;

    // hide form display
    document.getElementById("form1").style.display = "none";

    // target empty div and add tag to empty div 
    msg = document.getElementById("message-display");
    msg.classList.add("message");
    // add message to div
    msg.innerHTML=usersName+", thank you for your details. We will be in touch via "+usersEmail+" shortly!";
}


// alert version
function formChecker(){
	event.preventDefault();
	document.getElementById("form2").style.display = "none";
	var name=document.getElementById("f2-name-input").value;
	var email=document.getElementById("f2-email-input").value;
	alert(name+", thank you for your details. We will be in touch via "+email+" shortly.");
}