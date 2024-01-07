import { createClient }  from "pexels";

const client = createClient("QUwoiVRihsSqxSlTdNkPvjDuTd9wcJQ2mF2X97XvmcaVMvWcqEEXEtki");

async function searchPhoto(search, photosPerPage){
	const response = await client.photos.search({ query: search, per_page: photosPerPage});
	return response;
}

async function curatedPhoto(photosPerPage){
	const response = await client.photos.curated({per_page: photosPerPage});
	return response;
}

export {
	searchPhoto,
	curatedPhoto
};