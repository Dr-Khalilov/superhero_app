'use strict';
const { heroComponent } = require('./heroComponent');
const { metaComponent } = require('./metaComponent');

const { id, createdAt, updatedAt, images, superpowers, ...restFields } =
    heroComponent;

const heroesComponent = {
    CreateHeroWithoutPowers: {
        type: 'object',
        properties: {
            ...restFields,
        },
    },
    CreateHeroWithPowers: {
        type: 'object',
        properties: {
            ...restFields,
            superpowers,
        },
    },
    CreateHeroWithImages: {
        type: 'object',
        properties: {
            ...restFields,
            images,
        },
        encoding: {
            image: {
                contentType: [
                    'image/png',
                    'image/jpg',
                    'image/jpeg',
                    'image/gif',
                    'image/svg',
                ],
            },
        },
    },
    GetHeroes: {
        type: 'object',
        properties: {
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        ...heroComponent,
                    },
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
                properties: {
                    ...heroComponent,
                },
            },
        },
    },
    UpdateHeroWithoutImages: {
        type: 'object',
        properties: {
            ...restFields,
            superpowers,
        },
    },
    UpdateHeroWithImages: {
        type: 'object',
        properties: {
            ...restFields,
            superpowers,
            images,
        },
        encoding: {
            images: {
                contentType: [
                    'image/png',
                    'image/jpg',
                    'image/jpeg',
                    'image/gif',
                    'image/svg',
                ],
            },
        },
    },
};

module.exports = { heroesComponent };
