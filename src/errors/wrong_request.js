const BaseError = require('./base_error');

class WrongRequest extends BaseError {
    constructor(message = "One or more provided data are wrong"){
        super(message, 400)
    }
}

module.exports = WrongRequest;