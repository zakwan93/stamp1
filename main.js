var mybtn = document.querySelector('.dropbtn');
var mydropdown = document.querySelector('.dropdown-content');

// togglling class for hamburger menu
mybtn.addEventListener('click', function() {
   mydropdown.classList.toggle('show');
});


// Call for Slide Annimation on page load
var right = document.querySelector(".right");
document.addEventListener('DOMContentLoaded', function () {
    right.classList.toggle('slide')
});