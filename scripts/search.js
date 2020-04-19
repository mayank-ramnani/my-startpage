var searchbox = document.getElementById("search");

// Handle "enter" key press
searchbox.addEventListener("keydown", function(e) {
	e.keyCode === 13 ? search() : false;
});

// Returns without trailing slash
function get_current_url() {
	const current_url = window.location.href;
	if (current_url[-1] == "/") return current_url.slice(0,-1);
	else return current_url;
}

async function get_search_engines() {
	let search_engines = await (await fetch(get_current_url() + "/config/search-engines.json")).json();
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

// add support for toggling help using '?'

// todo:
// 1. shake animation on wrong input

// limitation: 
// 1. can't start a query with ! character, will treat it as search engine id