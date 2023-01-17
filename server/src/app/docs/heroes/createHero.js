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
                        allOf: [
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
                description: 'Bad request exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/BadRequestException',
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
        },
    },
};

module.exports = { createHero };
