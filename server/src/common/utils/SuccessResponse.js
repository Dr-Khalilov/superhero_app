const { HttpStatus } = require('./httpStatus');

class SuccessResponse {
    constructor(data = {}, status = HttpStatus.OK) {
        this.data = data;
        this.status = status;
    }
}

module.exports = { SuccessResponse };
