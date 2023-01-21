'use strict';
const { ListTags } = require('../listTags');
const { HttpStatus } = require('../../../common/utils/httpStatus');

const createPowers = {
    post: {
        tags: [ListTags.Superpowers],
        summary: 'Create powers',
        description: 'Create powers for superhero',
        operationId: 'createPowers',
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
};

module.exports = { createPowers };
