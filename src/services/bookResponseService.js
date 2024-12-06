const Services = require('./services');

class BookResponseService extends Services{
    constructor(){
        super("book_responses");
    }
}

module.exports = BookResponseService;