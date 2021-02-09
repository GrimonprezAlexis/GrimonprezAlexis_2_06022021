/** Hover item navigation */
function addClass(index) {
  var element = document.getElementById(`item-hover-${index}`);
  element.classList.add("nav-hover");
}

function removeClass(index) {
  var element = document.getElementById(`item-hover-${index}`);
  element.classList.remove("nav-hover");
}

function onScroll(){
  var el = document.getElementById('scrollTop');
  window.scrollY  > 100 ? el.style.display = "block" : el.style.display = "none";
}