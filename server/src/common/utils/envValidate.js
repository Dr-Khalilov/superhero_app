'use strict';
const { cleanEnv, port, str, num } = require('envalid');

const validateEnv = async () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        SERVER_PORT: port(),
        DEBUG_PORT: port(),
        DB_PORT: port(),
        DB_DIALECT: str(),
        DB_USER: str(),
        DB_PASSWORD: str(),
        DB_HOST: str(),
        DB_NAME: str(),
        MAX_FILE_SIZE: num(),
        FIELD_NAME_SIZE: num(),
    });
};

module.exports = { validateEnv };
