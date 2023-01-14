const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class BadRequestException extends ApplicationException {
    constructor(message = 'Bad request') {
        super(message, HttpStatus.BAD_REQUEST);
    }
}

module.exports = { BadRequestException };
