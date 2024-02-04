
function dbvSearch(parameters){
	const { name, email, lowerThanFrequency, upperThanFrequency, ageEqual, minAge, maxAge } = parameters;

	let search = {};

	if(name) search.name = {$regex: name, $options: "i"};
    if(email) search.email = {$regex: email, $options: "i"};

	//frequency search
	if(lowerThanFrequency || upperThanFrequency) search.frequency = {};
	if(lowerThanFrequency) search.frequency.$lte = lowerThanFrequency;
	if(upperThanFrequency) search.frequency.$gte = upperThanFrequency;

	//age search
	if(minAge || maxAge) search.age = {};
	if(minAge) search.age.$gte = minAge;
	if(maxAge) search.age.$lte = maxAge;

	//specific age search
	if(ageEqual) search.age = ageEqual;




    return search;
}

module.exports = dbvSearch;

