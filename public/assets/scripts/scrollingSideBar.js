// Get the sidebar
var sidebar = document.getElementById("sidebar");

// When we scroll the window, the sidebar follows
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log("Scrolling");
  sidebar.style.top = 41 + document.body.scrollTop;
  console.log(document.body.scrollTop);
}