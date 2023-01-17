'use strict';
const { configuration } = require('../../configs/configuration');

const servers = {
    servers: [
        {
            url:
                configuration.deployHost ||
                `http://localhost:${configuration.serverPort}/api`,
            description: 'Server',
        },
    ],
};

module.exports = { servers };
