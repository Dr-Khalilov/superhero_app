'use strict';
const { ListTags } = require('../listTags');
const { HttpStatus } = require('../../../common/utils/httpStatus');

const updateHero = {
    patch: {
        tags: [ListTags.Superheroes],
        summary: 'Update a superhero',
        description: 'Update a hero data',
        operationId: 'updateHero',
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
                description: 'Numeric Id of the user to update',
            },
        ],
        requestBody: {
            required: false,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UpdateHeroWithoutImages',
                    },
                },
                'multipart/form-data': {
                    schema: {
                        $ref: '#/components/schemas/UpdateHeroWithImages',
                    },
                },
            },
        },
        responses: {
            [HttpStatus.ACCEPTED]: {
                description: 'A updated superhero data',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetHero',
                        },
                    },
                },
            },
            [HttpStatus.NOT_FOUND]: {
                description: 'Not found exception',
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

module.exports = { updateHero };
