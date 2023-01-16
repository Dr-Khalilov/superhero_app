'use strict';

const heroComponent = {
    properties: {
        id: {
            type: 'integer',
            description: 'Primary key',
            example: '1',
        },
        nickName: {
            type: 'string',
            description: 'Nick name',
            example: 'Superman',
        },
        realName: {
            type: 'string',
            description: 'A real name',
            example: 'Clark Kent',
        },
        originDescription: {
            type: 'string',
            description: 'Information about hero',
            example: `He was born Kal-El on the planet Krypton, 
                        before being rocketed to Earth as an infant by his scientist father Jor-El, 
                        moments before Krypton's destruction...`,
        },
        catchPhrase: {
            type: 'string',
            description: 'Some catch phrases',
            example:
                "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        },
        superpowers: {
            type: 'array',
            description: 'Some powers',
            example: [
                'solar energy absorption and healing factor',
                'solar flare and heat vision',
                'solar invulnerability',
                'flight...',
            ],
        },
        images: {
            type: 'array',
            description: 'Some images of hero',
            example: ['a set of images of the superhero'],
        },
        createdAt: {
            type: 'string',
            description: 'The created date of instance',
            example: new Date().toISOString(),
        },
        updatedAt: {
            type: 'string',
            description: 'The updated date of instance',
            example: new Date().toISOString(),
        },
    },
};

module.exports = { heroComponent };
