// const search_engines = getJson("enginesList.json");
let searchbox = document.getElementById("search");
// 	  urlRegex		= /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

// Handle "enter" key press
searchbox.addEventListener("keydown", function(e) {
	e.keyCode === 13 ? search() : false;
});

async function get_search_engines() {
	let search_engines = await (await fetch("../config/search-engines.json")).json();
	return search_engines; 
}

async function search() {
	console.log("searching ..");
	const search_engines = await get_search_engines();

	let query = searchbox.value;
	// split words and find out the search engine id needed
	let words = query.split(" ");
	let first_word = words.shift();
	// Detect engine, google search by default
	let engine_id = "search";
	if (first_word[0] == "!")
	{
		// it is a command, so get the engine id from it
		engine_id = first_word.slice(1);
		console.log(engine_id);
		// now correct the query by removing the command from it
		// construct the string back with space delimiter
		query = words.join(" ");
		console.log(query);
	}
	
	// get the engine base url from id
	let engine_url = search_engines[engine_id];
	// get the search string
	let query_url = engine_url + query;

	// check to prevent empty searches
	if (query) {
		window.location.href = query_url;
	}
	else {
		// make the box red or something, or animate
		focus(searchbox);
	}
}

// todo:
// 1. shake animation on wrong input

// limitation: 
// 1. can't start a query with ! character, will treat it as search engine id