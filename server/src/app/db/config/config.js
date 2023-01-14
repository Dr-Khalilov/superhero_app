'use strict';
const { configuration } = require('../../../configs/configuration');

module.exports = {
    development: {
        username: configuration.dbUser,
        password: configuration.dbPassword,
        database: configuration.dbName,
        host: configuration.dbHost,
        dialect: configuration.dbDialect,
        seederStorage: 'json',
        migrationStorage: 'json',
    },
    test: {},
    production: {},
};
