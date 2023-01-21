'use strict';
const { createPowers } = require('./createPowers');
const { deletePower } = require('./deletePower');
const { getPowers } = require('./getPowers');

const powers = {
    '/superheroes/{heroId}/powers': {
        ...createPowers,
        ...getPowers,
    },
    '/superheroes/{heroId}/powers/{powerId}': {
        ...deletePower,
    },
};

module.exports = { powers };
