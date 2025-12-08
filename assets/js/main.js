//smooth loading
$(document).ready(function () {
    $('.loading-anim').fadeTo(1000, 1);
});

// Get the container element
let btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
} 


function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_lc7co6b", "template_e5baggg", params).then(alert("email sent"));
    document.getElementById("contact-form").reset();
}

//theme switcher
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.dataset.theme = savedTheme;
}


const btn = document.getElementById("theme-toggle");
btn.addEventListener('click', () => {
    console.log("test");
    const newTheme = document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
    document.body.dataset.theme = newTheme;

    if (newTheme) {
        localStorage.setItem('theme', newTheme);
    } else {
        localStorage.removeItem('theme'); // back to default
    }
});