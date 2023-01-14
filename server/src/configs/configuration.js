'use strict';
const { resolve } = require('path');
const { config } = require('dotenv');

config();

const {
    env: {
        NODE_ENV,
        SERVER_PORT,
        FIELD_NAME_SIZE,
        MAX_FILE_SIZE,
        DB_DIALECT,
        DB_NAME,
        DB_USER,
        DB_PASSWORD,
        DB_HOST,
    },
} = process;

const configuration = {
    nodeEnv: NODE_ENV,
    staticPath: resolve(__dirname, '..', '..', 'public'),
    serverPort: Number(SERVER_PORT) || 3000,
    dbDialect: DB_DIALECT,
    dbName: DB_NAME,
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbHost: DB_HOST,
    fieldNameSize: Number(FIELD_NAME_SIZE),
    maxFileSize: Number(MAX_FILE_SIZE),
};

module.exports = { configuration };
