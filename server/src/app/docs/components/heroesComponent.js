'use strict';
const { heroComponent } = require('./heroComponent');
const { metaComponent } = require('./metaComponent');

const {
    properties: { createdAt, updatedAt, ...restFields },
} = heroComponent;

const heroesComponent = {
    GetHeroes: {
        type: 'object',
        properties: {
            data: {
                type: 'array',
                items: {
                    ...heroComponent,
                },
            },
            ...metaComponent,
        },
    },
    GetHero: {
        type: 'object',
        properties: {
            data: {
                type: 'object',
                ...heroComponent,
            },
        },
    },
    CreateHero: {
        type: 'object',
        properties: {
            ...restFields,
        },
    },
};

module.exports = { heroesComponent };
