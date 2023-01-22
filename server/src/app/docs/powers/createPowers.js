'use strict';
const { ListTags } = require('../listTags');
const { HttpStatus } = require('../../../common/utils/httpStatus');

const createPowers = {
    post: {
        tags: [ListTags.Superpowers],
        summary: 'Create powers',
        description: 'Create powers for superhero',
        operationId: 'createPowers',
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
                description: 'Integer HeroId of the superhero to create powers',
            },
        ],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/CreatePowers',
                    },
                },
            },
        },
        responses: {
            [HttpStatus.CREATED]: {
                description: 'Created superpowers',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetPowers',
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

module.exports = { createPowers };
