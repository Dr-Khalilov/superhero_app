const { BadRequestException } = require('../exceptions');
const parseIntPipe = paramToInt => async (req, res, next) => {
    req.params[paramToInt] = parseInt(req.params[paramToInt], 10);
    next();
};

module.exports = { parseIntPipe };
