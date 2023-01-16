'use strict';
const { getHeroes } = require('./getHeroes');
const { getHero } = require('./getHero');
const { deleteHero } = require('./deleteHero');

const heroes = {
    paths: {
        '/superheroes': {
            ...getHeroes,
            ...getHero,
            ...deleteHero,
        },
    },
};

module.exports = { heroes };
