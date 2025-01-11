const Services = require('./services');

class BookResponseService extends Services{
    constructor(){
        super("book_responses");
    }

    async searchResponsesByClassBook(classBookId){
        return await this.getRegBySearch({'class_book._id': classBookId});
    }
}

module.exports = BookResponseService;