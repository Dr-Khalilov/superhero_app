'use strict';
const { resolve } = require('path');
const { config } = require('dotenv');

config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

const {
    env: {
        NODE_ENV,
        SERVER_PORT,
        DEPLOY_HOST,
        FIELD_NAME_SIZE,
        MAX_FILE_SIZE,
        MAX_FILES_AMOUNT,
        DB_DIALECT,
        DB_NAME,
        DB_USER,
        DB_PASSWORD,
        DB_HOST,
        REDIS_PORT,
        REDIS_HOST,
        REDIS_USERNAME,
        REDIS_PASSWORD,
        CACHE_TTL,
    },
} = process;

const configuration = {
    nodeEnv: NODE_ENV,
    staticPath: resolve(__dirname, '..', '..', 'public'),
    serverPort: parseInt(SERVER_PORT, 10),
    deployHost: DEPLOY_HOST,
    dbDialect: DB_DIALECT,
    dbName: DB_NAME,
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbHost: DB_HOST,
    redisPort: parseInt(REDIS_PORT, 10),
    redisHost: REDIS_HOST,
    redisUsername: REDIS_USERNAME,
    redisPassword: REDIS_PASSWORD,
    cacheTTL: parseInt(CACHE_TTL, 10),
    fieldNameSize: parseInt(FIELD_NAME_SIZE, 10),
    maxFileSize: parseInt(MAX_FILE_SIZE, 10),
    maxFilesAmount: parseInt(MAX_FILES_AMOUNT, 10),
};

module.exports = { configuration };
