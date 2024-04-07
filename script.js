window.onscroll = function() {myFunction()};

var menu = document.getElementsByClassName("Menu")[0];
var sticky = menu.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    menu.classList.add("MenuFixo");
  }
}
