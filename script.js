const themes = {
	"light": "--brand: #008cff; --text-color: black; --alt-text-color: white; --inner-border: none; --background: white; --side-color: #008cff;",
	"dark": "--brand: #0077d9; --text-color: white; --alt-text-color: black; --inner-border: 2px #0077d9 solid; --background: #1a1a1a; --side-color: #1a1a1a;"
}
var isDarkMode = 0;

function toggleDarkMode() {
	if (isDarkMode) {
		isDarkMode = 0;
		let styleObj = document.querySelector("html");
		styleObj.style = themes.light;
	} else {
		isDarkMode = 1;
		let styleObj = document.querySelector("html");
		styleObj.style = themes.dark;
	}
};

function wow() {
	alert("Wow! JavaScript!");
}