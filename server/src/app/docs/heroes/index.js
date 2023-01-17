'use strict';
const { getHeroes } = require('./getHeroes');
const { getHero } = require('./getHero');
const { deleteHero } = require('./deleteHero');
const { createHero } = require('./createHero');
const { updateHero } = require('./updateHero');

const heroes = {
    paths: {
        '/superheroes': {
            ...createHero,
            ...getHeroes,
        },
        '/superheroes/{id}': {
            ...getHero,
            ...updateHero,
            ...deleteHero,
        },
    },
};

module.exports = { heroes };
