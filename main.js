var mybtn = document.querySelector('.dropbtn');
var mydropdown = document.querySelector('.dropdown-content');

mybtn.addEventListener('click', function() {
   mydropdown.classList.toggle('show');
});


window.addEventListener('click',function(){
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

var right = document.querySelector(".right");

document.addEventListener('DOMContentLoaded', function () {
    right.classList.toggle('slide')
});