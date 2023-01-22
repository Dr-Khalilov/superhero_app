'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const getImage = {
    get: {
        tags: [ListTags.Images],
        summary: 'Get an image',
        description: 'Get an image of the superhero',
        operationId: 'getImage',
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
                description: 'Integer HeroId of the superhero',
            },
            {
                name: 'imageId',
                in: 'path',
                example: 1,
                schema: {
                    type: 'integer',
                    format: 'int64',
                },
                required: true,
                description: 'Integer ImageId to get image',
            },
        ],
        responses: {
            [HttpStatus.OK]: {
                description: 'Image of the superhero',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetImages',
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

module.exports = { getImage };
