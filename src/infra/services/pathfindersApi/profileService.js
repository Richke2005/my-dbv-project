import Service from './service.js';

class ProfileService extends Service{
    constructor() {
        super('profile');
    }

    async testToken(token) {
        const response = await fetch(`${this.url}/home`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            mode: 'cors'
        });

        return response;
    }

    async getProfile() {
        const response = await fetch(`${this.url}/home`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await super.getToken()}`
            },
            mode: 'cors'
        });

        return response.json();
    }

    async updateProfile(data) {
        const response = await fetch(`${this.url}/update`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await super.getToken()}`
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });

        return response.json();
    }
}

export default ProfileService;
