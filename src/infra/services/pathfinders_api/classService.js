const Service = require('./Service.js');

class ClassService extends Service{
    constructor(){
        super('class');
    }
}

module.exports = ClassService;