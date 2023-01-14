'use strict';
const { mkdir } = require('fs/promises');

const createPublicFolder = async path => {
    await mkdir(path, { recursive: true });
};

const paginateResponse = async (data = [], page = 1, limit = 10) => {
    const [itemCount, result] = data;
    const pageCount = Math.ceil(itemCount / limit);
    const hasPreviousPage = page > 1;
    const hasNextPage = page < pageCount;
    return {
        data: [...result],
        meta: {
            page,
            limit,
            itemCount,
            pageCount,
            hasPreviousPage,
            hasNextPage,
        },
    };
};

module.exports = { createPublicFolder, paginateResponse };
