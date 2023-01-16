'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const getHero = {
    get: {
        tags: [ListTags.Superheroes],
        summary: 'Get a superhero',
        description: 'Get a superhero by id',
        operationId: 'getHero',
        parameters: [
            {
                name: 'id',
                in: 'query',
                type: 'integer',
                example: 1,
                // schema: {
                //     $ref: '#/components/schemas/id',
                // },
                required: true,
                description: 'Id param for get a hero',
            },
        ],
        responses: {
            [HttpStatus.OK]: {
                description: 'A superhero data',
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

module.exports = { getHero };
