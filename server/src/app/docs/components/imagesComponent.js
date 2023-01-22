'use strict';

const imagesComponent = {
    CreateImages: {
        type: 'object',
        properties: {
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
        },
    },
    GetImages: {
        type: 'object',
        properties: {
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                            description: 'Primary key',
                        },
                        heroId: {
                            type: 'integer',
                            example: 1,
                            description: 'Primary key',
                        },
                        path: {
                            type: 'string',
                            description: 'The path to the image',
                            example:
                                'http://localhost:4000/images/yulia-matvienko-ArA3S3k0wTU-unsplash_1674253240700.jpg"',
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
                    },
                },
            },
        },
    },
};

module.exports = { imagesComponent };
