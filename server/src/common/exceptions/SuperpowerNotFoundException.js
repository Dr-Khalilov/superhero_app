const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class SuperpowerNotFoundException extends ApplicationException {
    constructor(id) {
        super(`Superpower with that id: ${id} not found`, HttpStatus.NOT_FOUND);
    }
}

module.exports = { SuperpowerNotFoundException };
