'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const getHeroes = {
    get: {
        tags: [ListTags.Superheroes],
        summary: 'Get superheroes',
        description: 'Get superheroes by query params',
        operationId: 'getHeroes',
        parameters: [
            {
                name: 'page',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/page',
                },
                required: false,
                description: 'Page param for get heroes',
            },
            {
                name: 'limit',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/limit',
                },
                required: false,
                description: 'A limit param for get heroes',
            },
            {
                name: 'offset',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/offset',
                },
                required: false,
                description: 'A offset param for get heroes',
            },
        ],
        responses: {
            [HttpStatus.OK]: {
                description: 'A list of superheroes',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetHeroes',
                        },
                    },
                },
            },
            [HttpStatus.NOT_FOUND]: {
                description: 'Superheroes not found in database exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/SuperheroesNotFoundException',
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

module.exports = { getHeroes };
