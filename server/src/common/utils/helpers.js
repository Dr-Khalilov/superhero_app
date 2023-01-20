'use strict';
const { mkdir, unlink } = require('fs/promises');
const { join } = require('path');
const { Logger } = require('./Logger');
const { configuration } = require('../../configs/configuration');

const createPublicFolder = async path => {
    await mkdir(path, { recursive: true });
};

const asyncWrapper = handler => (req, res, next) =>
    Promise.resolve(handler(req, res, next))
        .then(response => res.status(response.status).send(response.data))
        .catch(err => next(err));

const paginateResponse = async (data = [], page, limit) => {
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

const removeFile = async pathToFile => {
    const logger = new Logger(removeFile.name);
    try {
        await unlink(pathToFile);
        logger.log(`File successfully deleted ${pathToFile}`);
    } catch (error) {
        logger.error(`There was an error: ${error.message}`);
    }
};

const connectToDatabase = async db => {
    const logger = new Logger(connectToDatabase.name);
    try {
        await db.sequelize.authenticate();
        logger.log('Connection to database has been established successfully!');
    } catch (error) {
        logger.error(`Unable to connect to the database: ${error}`);
    }
};

module.exports = {
    createPublicFolder,
    paginateResponse,
    connectToDatabase,
    asyncWrapper,
    removeFile,
};
