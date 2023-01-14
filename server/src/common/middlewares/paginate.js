'use strict';
const paginate = async (req, res, next) => {
    try {
        const {
            query: { page, limit, offset },
        } = req;

        req.pagination = {
            page: Number(!page || page <= 0 ? 1 : page),
            limit: Number(!limit || limit <= 0 || limit > 50 ? 50 : limit),
            offset: Number(!offset || offset <= 0 ? 0 : offset),
        };

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = { paginate };
