'use strict';
const { SortOrders } = require('../utils/SortOrders');

const paginate = async (req, res, next) => {
    try {
        let {
            query: { page = 1, limit = 10, sort = SortOrders.ASC },
        } = req;

        page = Number(!page || page <= 0 ? 1 : page);
        limit = Number(!limit || limit <= 0 || limit > 50 ? 50 : limit);

        const offset = (page - 1) * limit;

        req.pagination = {
            sort,
            page,
            limit,
            offset,
        };

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = { paginate };
