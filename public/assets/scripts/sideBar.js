// Get the sidebar
var sidebar = document.getElementById("sidebar");
var button = document.getElementById("sidebarButton");
//var searchForm = document.getElementById("searchForm");
//var authorForm = document.getElementById("authorForm");
var issueForm = document.getElementById("issueForm");
var issueInput = document.getElementById("issue");

var typeForm = document.getElementById("typeForm");
var typeInput = document.getElementById("type");

// When we scroll the window, the sidebar follows
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (window.innerWidth > 769) {
		// Updates the top margin of the sidebar to make it follow a user's window
		var scrollTop = document.documentElement.scrollTop;
		var sidebarMargin = 41+ scrollTop;
		if ((sidebarMargin + sidebar.offsetHeight) < document.getElementById("mainContent").offsetHeight) {
			// The footer follows your window on the page, but it stops once you reach the bottom of the contents
			sidebar.style.marginTop = sidebarMargin + "px";
		} else {
			// refresh rate is too low, scrollTop is not always updated when a user scrolls really fast
			// scrollTop would suddently jump to a high number, esacping the IF statement above, which would leave the sidebar above stuck.
			// This makes sure that the sidebar is at the bottom as long as you're above a certain scrollTop
			sidebar.style.marginTop = (document.getElementById("mainContent").offsetHeight - sidebar.offsetHeight) + "px";
		}
	} else {
		sidebar.style.marginTop = "3px";
	}
}

function showOptions () {
	if (button.innerHTML === "Search") { // search if the button is currently intended for that function
		advancedSearch(typeInput.value, issueInput.value);
	}

	// otherwise show options
	// called when the "advanced options" button is pressed
	// shows filters
	button.innerHTML = "Search";
	//searchForm.placeholder = "Article Name";
	//authorForm.style.display = "block";
	typeForm.style.display = "block";
	issueForm.style.display = "block";
}

function updatePage (id) {
	// updates the page based on the genre
	// acceptable ids: "Home", "Sports", "On Campus", "Off Campus", "Features", "Arts"
	var idList = ["Home", "Sports", "On Campus", "Off Campus", "Features", "Arts"];
	for (var currentID in idList) {
		if (idList[currentID] === id) {
			document.getElementById(idList[currentID]).classList.add("active");
			if (id === "Home") {
				showHome();
			}
			else {
				showCategory(id);
			}
			//filterGenre(idList[currentID]));
		} else {
			document.getElementById(idList[currentID]).classList.remove("active");
		}
	}
}
/*
function filterGenre(genre) {

}*/