const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class SuperpowersNotFoundException extends ApplicationException {
    constructor(heroId) {
        super(
            `No superpowers found for superhero with that id: ${heroId}`,
            HttpStatus.NOT_FOUND,
        );
    }
}

module.exports = { SuperpowersNotFoundException };
