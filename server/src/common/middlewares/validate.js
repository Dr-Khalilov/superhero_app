'use strict';
const { HttpStatus } = require('../utils/httpStatus');

const validate = schema => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).send({
            name: 'ValidationException',
            errors: error.errors,
        });
    }
};

module.exports = { validate };
