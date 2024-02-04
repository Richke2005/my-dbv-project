const { desbravadores } = require("../../models/");

function dbvSearch(parameters){
	const { name, email, frequency, age } = parameters;

	let search = {};

	if(name) search.name = {$regex: name, $options: "i"};
    if(email) search.email = {$regex: email, $options: "i"};

    return search;
}

module.exports = dbvSearch;

