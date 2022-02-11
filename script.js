const ls = window.localStorage

function $(qry) {return document.querySelector(qry)}
const body = $("body");

function toggleDarkMode(e) {
	e.preventDefault();
	if(darkModeState == "dark") {
		$("body").className = "light";
		darkModeState = "light";
	} else {
		$("body").className = "dark";
		darkModeState = "dark";
	}
	ls.setItem("home.darkMode", body.className);
}

var darkModeState = "light";
if(ls.getItem("home.darkMode")) {
	darkModeState = ls.getItem("home.darkMode");
} else {
	ls.setItem("home.darkMode", body.className);
}

if(darkModeState == "dark") {
	$("body").className = "dark";
} else {
	$("body").className = "light";
}

$("div#dark-light").addEventListener("pointerdown", toggleDarkMode);