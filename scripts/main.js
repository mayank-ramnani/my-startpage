// used var because this variable is also declared again in search.js, can't use let here
var searchbox = document.getElementById("search");

// slash or question mark
searchbox.addEventListener("keydown", function(e) {
	e.keyCode === 191 ? show_help() : false;
});

// escape key
searchbox.addEventListener("keydown", function(e) {
	e.keyCode === 27 ? reset_searchbox() : false;
});

const body = document.body;
body.addEventListener("keydown", function(e) {
    e.keyCode === 27 ? hide_help() : false;
})

function toggle_help() {
    const helpbox = document.querySelector(".js-helpbox");
    const class_name = "hide";
	if (helpbox.classList.contains(class_name)) {
        show_help();
    }
	else {
        hide_help();
	}
}

function show_help() {
	const helpbox = document.querySelector(".js-helpbox");
    helpbox.classList.remove("hide");
}

function hide_help() {
    const helpbox = document.querySelector(".js-helpbox");
    helpbox.classList.add("hide");
}

function reset_searchbox() {
    searchbox.value = "";
}
