const { ApplicationException } = require('./ApplicationException');
const { HttpStatus } = require('../utils/httpStatus');

class ImageNotFoundException extends ApplicationException {
    constructor(id) {
        super(`Image with that id: ${id} not found`, HttpStatus.NOT_FOUND);
    }
}

module.exports = { ImageNotFoundException };
