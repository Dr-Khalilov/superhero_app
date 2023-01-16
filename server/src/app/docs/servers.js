'use strict';
const { configuration } = require('../../configs/configuration');

const servers = {
    servers: [
        {
            url: `http://localhost:${configuration.serverPort}/api`,
            description: 'Local server',
        },
        {
            url: '',
            description: 'Production server',
        },
    ],
};

module.exports = { servers };
