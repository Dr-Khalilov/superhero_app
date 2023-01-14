const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class PathNotFoundException extends ApplicationException {
    constructor(path) {
        super(`The requested path: ${path} not found!`, HttpStatus.NOT_FOUND);
    }
}

module.exports = { PathNotFoundException };
