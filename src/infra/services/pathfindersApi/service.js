import AsycnStorage from '@react-native-async-storage/async-storage';

export default class Service {
    #entity;
    url
    constructor(entity) {
        this.#entity = entity;
        this.url = `http://192.168.0.25:8000/dbv/api/v1/${this.#entity}`;
    }

    async getToken(){
        try{
            return await AsycnStorage.getItem('token');
        }catch(e){
            console.log(e);
        }
    }

    /**
     * Obtém todos os dados da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.
     */
    async getAllData() {
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await this.getToken()}`
            },
            mode: 'cors'
        });
        return response.json();
    }

    /**
     * Obtém os dados de uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.
     */
    async getDataById(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await this.getToken()}`
            },
            mode: 'cors'
        });
        return response.json();
    }

    /**
     * Envia dados para a entidade.
     * @param {Object} data - Os dados a serem enviados.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async postData(data) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await AsycnStorage.getItem('token')}`
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Atualiza os dados de uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @param {Object} data - Os dados a serem atualizados.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async putData(id, data) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await this.getToken()}`
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Deleta uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async deleteData(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await this.getToken()}`
            },
            mode: 'cors'
        });
        return response.json();
    }

}