// Get the sidebar
var sidebar = document.getElementById("sidebar");

// When we scroll the window, the sidebar follows
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var scrollTop = document.documentElement.scrollTop;
	var sidebarMargin = 41+ scrollTop;
  if ((sidebarMargin + sidebar.offsetHeight) < document.getElementById("mainContent").offsetHeight) {
    sidebar.style.marginTop = sidebarMargin + "px";
  }
}