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
                description: 'Integer Id of the superpowers to get',
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
                description: 'No superpowers found exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/SuperpowersNotFoundException',
                        },
                    },
                },
            },
        },
    },
};

module.exports = { getPowers };
