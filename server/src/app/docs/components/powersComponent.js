'use strict';
const { heroComponent } = require('./heroComponent');

const { id, superpowers, createdAt, updatedAt } = heroComponent;

const powersComponent = {
    CreatePowers: {
        type: 'object',
        properties: {
            superpowers,
        },
    },
    GetPowers: {
        type: 'object',
        properties: {
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id,
                        superpowers,
                        createdAt,
                        updatedAt,
                    },
                },
            },
        },
    },
};

module.exports = { powersComponent };
