const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class SuperheroNotFoundException extends ApplicationException {
    constructor(id) {
        super(`Superhero with that id: ${id} not found`, HttpStatus.NOT_FOUND);
    }
}

module.exports = { SuperheroNotFoundException };
