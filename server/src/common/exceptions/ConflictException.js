const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class ConflictException extends ApplicationException {
    constructor(message) {
        super(message, HttpStatus.CONFLICT);
    }
}

module.exports = { ConflictException };
