'use strict';
const { resolve } = require('path');
const { config } = require('dotenv');

config();

const {
    env: {
        NODE_ENV,
        SERVER_PORT,
        DEPLOY_HOST,
        FIELD_NAME_SIZE,
        MAX_FILE_SIZE,
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
    serverPort: Number(SERVER_PORT) || 3000,
    deployHost: DEPLOY_HOST,
    dbDialect: DB_DIALECT,
    dbName: DB_NAME,
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbHost: DB_HOST,
    redisPort: Number(REDIS_PORT),
    redisHost: REDIS_HOST,
    redisUsername: REDIS_USERNAME,
    redisPassword: REDIS_PASSWORD,
    cacheTTL: Number(CACHE_TTL),
    fieldNameSize: Number(FIELD_NAME_SIZE),
    maxFileSize: Number(MAX_FILE_SIZE),
};

module.exports = { configuration };
