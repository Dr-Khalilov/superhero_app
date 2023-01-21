'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const createHero = {
    post: {
        tags: [ListTags.Superheroes],
        summary: 'Create a superhero',
        description: 'Create a hero with some data',
        operationId: 'createHero',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        oneOf: [
                            {
                                $ref: '#/components/schemas/CreateHeroWithoutPowers',
                            },
                            {
                                $ref: '#/components/schemas/CreateHeroWithPowers',
                            },
                        ],
                    },
                },
                'multipart/form-data': {
                    schema: {
                        $ref: '#/components/schemas/CreateHeroWithImages',
                    },
                },
            },
        },
        responses: {
            [HttpStatus.CREATED]: {
                description: 'A created superhero data',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetHero',
                        },
                    },
                },
            },
            [HttpStatus.BAD_REQUEST]: {
                description: 'Validation exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ValidationException',
                        },
                    },
                },
            },
            [HttpStatus.NOT_FOUND]: {
                description: 'The Requested path not found exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/PathNotFoundException',
                        },
                    },
                },
            },
            [HttpStatus.CONFLICT]: {
                description: 'Conflict resource',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ConflictException',
                        },
                    },
                },
            },
        },
    },
};

module.exports = { createHero };
