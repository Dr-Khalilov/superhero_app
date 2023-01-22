'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const createImages = {
    post: {
        tags: [ListTags.Images],
        summary: 'Create images',
        description: 'Create images for a superhero',
        operationId: 'createImages',
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
                description: 'Integer HeroId of the superhero to create images',
            },
        ],
        requestBody: {
            required: true,
            content: {
                'multipart/form-data': {
                    schema: {
                        $ref: '#/components/schemas/CreateImages',
                    },
                },
            },
        },
        responses: {
            [HttpStatus.CREATED]: {
                description: 'A created images for superhero',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetImages',
                        },
                    },
                },
            },
            [HttpStatus.BAD_REQUEST]: {
                description: 'Image validation',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/BadRequestException',
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

module.exports = { createImages };
