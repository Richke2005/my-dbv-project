import Service from './service.js';

class ClassService extends Service{
    constructor(){
        super('class');
    }

    async getPathfindersByClassId(id){
        const response = await fetch(`${this.url}/${id}/pathfinders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

export default ClassService;