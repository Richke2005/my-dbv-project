class AuthService{
    #entity;
    url
    constructor() {
        this.#entity = 'auth';
        this.url = `http://192.168.0.25:8000/dbv/api/v1/${this.#entity}`;
    }

    async login(data){
        const response = await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response;
    }
}

export default AuthService;