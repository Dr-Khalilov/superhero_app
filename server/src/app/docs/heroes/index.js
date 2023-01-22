'use strict';
const { getHeroes } = require('./getHeroes');
const { getHero } = require('./getHero');
const { deleteHero } = require('./deleteHero');
const { createHero } = require('./createHero');
const { updateHero } = require('./updateHero');
const { powers } = require('../powers');
const { images } = require('../images');

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
        ...powers,
        ...images,
    },
};

module.exports = { heroes };
