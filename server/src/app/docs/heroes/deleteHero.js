'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const deleteHero = {
    delete: {
        tags: [ListTags.Superheroes],
        summary: 'Delete a superhero',
        description: 'Delete a superhero by id',
        operationId: 'deleteHero',
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
                description: 'Integer Id of the user to delete',
            },
        ],
        responses: {
            [HttpStatus.NO_CONTENT]: {
                description: 'A no content',
                content: null,
            },
            [HttpStatus.NOT_FOUND]: {
                description: 'Superhero with that id not found',
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

module.exports = { deleteHero };
