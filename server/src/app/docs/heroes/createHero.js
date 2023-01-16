'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const createHero = {
    post: {
        tags: [ListTags.Superheroes],
        summary: 'Create a superhero',
        description: 'Create a hero with some data',
        operationId: 'createHero',
        body: [
            {
                name: 'id',
                in: 'body',
                schema: {
                    $ref: '#/components/schemas/CreateHero',
                },
                required: true,
                description: 'Id param for get hero',
            },
        ],
        responses: {
            [HttpStatus.OK]: {
                description: 'A created superhero data',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetHero',
                        },
                    },
                },
            },
            [HttpStatus.NOT_FOUND]: {
                description: 'A superhero not found exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/SuperheroNotFoundException',
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
