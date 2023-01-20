const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class ImagesNotFoundException extends ApplicationException {
    constructor(heroId) {
        super(
            `No images found for superhero with that id: ${heroId}`,
            HttpStatus.NOT_FOUND,
        );
    }
}

module.exports = { ImagesNotFoundException };
