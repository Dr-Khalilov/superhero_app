'use strict';
const { cleanEnv, port, str, num } = require('envalid');

const validateEnv = async () => {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        SERVER_PORT: port({ devDefault: 4000 }),
        DEPLOY_HOST: str(),
        DEBUG_PORT: port(),
        DB_PORT: port(),
        DB_DIALECT: str(),
        DB_USER: str(),
        DB_PASSWORD: str(),
        DB_HOST: str(),
        DB_NAME: str(),
        REDIS_PORT: port(),
        REDIS_HOST: str(),
        REDIS_USERNAME: str(),
        REDIS_PASSWORD: str(),
        CACHE_TTL: num(),
        MAX_FILE_SIZE: num(),
        FIELD_NAME_SIZE: num(),
    });
};

module.exports = { validateEnv };
