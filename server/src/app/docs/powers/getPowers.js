'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const getPowers = {
    get: {
        tags: [ListTags.Superpowers],
        summary: 'Get powers',
        description: 'Get the list of superpowers',
        operationId: 'getSuperpowers',
        parameters: [
            {
                name: 'heroId',
                in: 'path',
                example: 1,
                schema: {
                    type: 'integer',
                    format: 'int64',
                },
                required: true,
                description:
                    'Integer HeroId of the superhero to get of superpowers',
            },
        ],
        responses: {
            [HttpStatus.OK]: {
                description: 'List all superpowers',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetPowers',
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

module.exports = { getPowers };
