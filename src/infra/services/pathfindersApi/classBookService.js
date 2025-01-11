const Service = require('./Service.js');

class ClassBookService extends Service{
    constructor(){
        super('classbook');
    }
}

module.exports = ClassBookService;