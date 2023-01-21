'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const deletePower = {
    delete: {
        tags: [ListTags.Superpowers],
        summary: 'Delete a power',
        description: 'Delete a power by powerId',
        operationId: 'deletePower',
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
                description: 'Integer heroId to delete a power from superhero',
            },
            {
                name: 'powerId',
                in: 'path',
                example: 1,
                schema: {
                    type: 'integer',
                    format: 'int64',
                },
                required: true,
                description: 'Integer powerId of the power to delete',
            },
        ],
        responses: {
            [HttpStatus.NO_CONTENT]: {
                description: 'A no content',
                content: null,
            },
            [HttpStatus.NOT_FOUND]: {
                description: 'Superpower with that id not found',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/SuperpowerNotFoundException',
                        },
                    },
                },
            },
        },
    },
};

module.exports = { deletePower };
