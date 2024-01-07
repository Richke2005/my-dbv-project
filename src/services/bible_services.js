import axios from "axios";

const connAPI = axios.create({ baseURL: "https://www.abibliadigital.com.br/api" });

async function getRandomVerse(version) {
	const response = await connAPI.get(`/verses/${version}/random`);
	return response.data;
}

async function getBooks() {
	const response = await connAPI.get("/books");
	return response.data;
}

export {
	getRandomVerse,
	getBooks
};
