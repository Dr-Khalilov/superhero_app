'use strict';
const { heroComponent } = require('./heroComponent');
const { powerComponent } = require('./powerComponent');

const { superpowers } = heroComponent;

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
                        ...powerComponent,
                    },
                },
            },
        },
    },
};

module.exports = { powersComponent };
