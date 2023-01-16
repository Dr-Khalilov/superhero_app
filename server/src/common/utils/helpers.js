'use strict';
const { mkdir } = require('fs/promises');
const { Logger } = require('./Logger');

const createPublicFolder = async path => {
    await mkdir(path, { recursive: true });
};

const asyncWrapper = async (fn = async () => {}) => {};

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

const connectToDatabase = async db => {
    const logger = new Logger(connectToDatabase.name);
    try {
        await db.sequelize.authenticate();
        logger.log('Connection has been established successfully!');
    } catch (error) {
        logger.error(`Unable to connect to the database: ${error}`);
    }
};

module.exports = { createPublicFolder, paginateResponse, connectToDatabase };
