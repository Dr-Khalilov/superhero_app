const { HttpStatus } = require('../utils/httpStatus');

class ApplicationException extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
        this.message = message || 'Something went wrong. Please try again';
        this.statusCode = status || HttpStatus.INTERNAL_SERVER_ERROR;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { ApplicationException };
