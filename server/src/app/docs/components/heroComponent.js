'use strict';

const heroComponent = {
    id: {
        type: 'integer',
        example: 1,
        description: 'Primary key',
    },
    nickName: {
        type: 'string',
        example: 'Superman',
        description: 'Nick name',
    },
    realName: {
        type: 'string',
        example: 'Clark Kent',
        description: 'A real name',
    },
    originDescription: {
        type: 'string',
        example:
            "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        description: 'Information about hero',
    },
    catchPhrase: {
        type: 'string',
        example:
            "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        description: 'Some catch phrases',
    },
    superpowers: {
        type: 'string',
        nullable: true,
        example: [
            'solar energy absorption and healing factor',
            'solar flare and heat vision',
            'solar invulnerability',
            'flight...',
        ],
        description: 'Some powers',
    },
    images: {
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
            type: 'string',
            format: 'binary',
        },
        nullable: true,
        example: ['a set of images of the superhero'],
        description: 'Some images of hero',
    },
    createdAt: {
        type: 'string',
        format: 'timestamp',
        description: 'The created date of instance',
        example: new Date().toISOString(),
    },
    updatedAt: {
        type: 'string',
        format: 'timestamp',
        description: 'The updated date of instance',
        example: new Date().toISOString(),
    },
};

module.exports = { heroComponent };
