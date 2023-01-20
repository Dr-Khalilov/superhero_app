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
                in: 'path',
                example: 1,
                schema: {
                    type: 'integer',
                    format: 'int64',
                },
                required: true,
                description: 'Numeric Id of the user to get',
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
        },
    },
};

module.exports = { getHero };
