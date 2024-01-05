import axios from 'axios';

class BibleServices{
    #connAPI
    constructor(){
        this.#connAPI = axios.create({baseURL: "https://www.abibliadigital.com.br/api"})
    }

    async getRandomVerse(version){
        const response = await this.#connAPI.get(`/verses/${version}/random`);
        return response.data;
    }

    async getBooks(){
        const response = await this.#connAPI.get("/books");
        return response.data;
    }

}

export default BibleServices;