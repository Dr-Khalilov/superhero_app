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
                name: 'sort',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/sort',
                },
                required: false,
                description:
                    'Sort order parameter to get heroes.' +
                    '*`ASC` - Ascending, from A to Z.' +
                    '*`DESC` - Descending, from Z to A.',
            },
            {
                name: 'page',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/page',
                },
                required: false,
                description: 'Page parameter to get heroes.',
            },
            {
                name: 'limit',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/limit',
                },
                required: false,
                description: 'A limit parameter to get heroes.',
            },
        ],
        responses: {
            [HttpStatus.OK]: {
                description: 'A list of superheroes.',
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
        },
    },
};

module.exports = { getHeroes };
