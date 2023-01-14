const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class SuperheroesNotFoundException extends ApplicationException {
    constructor(message = 'Superheroes not found in database') {
        super(message, HttpStatus.NOT_FOUND);
    }
}

module.exports = { SuperheroesNotFoundException };
