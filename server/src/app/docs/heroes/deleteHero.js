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
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/id',
                },
                required: true,
                description: 'Id param for delete a hero',
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

module.exports = { deleteHero };
