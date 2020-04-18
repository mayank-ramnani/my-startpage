// const enginesList	= getJson("enginesList.json"),
let searchbox = document.getElementById("search");
// 	  urlRegex		= /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

//On `Enter` key press, do search
searchbox.addEventListener("keydown", function(e) {
	e.keyCode === 13 ? search() : false;
});

function search() {
	console.log("here");
	let query = searchbox.value;
	let engine = "https://www.google.com/search?q=";
// 	//Detect engine (eg.: "!yt vsauce" -> "youtube.com/results?search_query=vsauce")
// 	var engine = "";
// 	var firstWord = searchbox.value.split(' ')[0];

// 	if (firstWord[0] === '!') { //If first character is '!'
// 		//Select engine based on flag
// 		engine = enginesList[firstWord];

// 		if (engine === undefined) { //If the bang isn't listed in `enginesList.json`
// 			//Play animation in div
// 			playErrorAnimation(searchbox.parentElement);
// 			//Cancel the search
// 			return false;
// 		}

// 		//Delete flag
// 		query = query.split(' ');
// 		query.shift();
// 	}
// 	else if (query.match(urlRegex)) { //If input is a URL
// 		//If it already has `http(s)://`, don't prefix anything
// 		//Otherwise, add `http://` prefix
// 		engine = (query.indexOf("http") === 0 ? "" : "http://");
// 	}
// 	else {
// 		//Use search engine listed in `enginesList.json`
// 		engine = enginesList["search"];
// 	}

	let query_url = engine + query;

	//Prevent empty searches
	//If `query` string isn't blank, go to `query_url`
	if (query) {
		window.location.href = query_url;
	}
	else {
		focus(searchbox);
	}
// }

// function playErrorAnimation(element) {
// 	//Play shake animation
// 	element.classList.add("shake");

// 	//Remove shake animation after it's done (1 second)
// 	setTimeout(function() {
// 		element.classList.remove("shake");
// 	}, 1000)
// }

// function getJson(file) {
// 	var req = new XMLHttpRequest();
// 	req.open('GET', file, false);

// 	req.send();

// 	if (req.status == 200) {
// 		if (req.response != undefined) {
// 			return JSON.parse(req.response);
// 		}
// 	}
// 	else if (req.status == 404) {
// 		alert("Bangs will not work");
// 	}
}