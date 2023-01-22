'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const deleteImage = {
    delete: {
        tags: [ListTags.Images],
        summary: 'Delete an image',
        description: 'Delete an image by heroId and imageId',
        operationId: 'deleteImage',
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
                description: 'Integer HeroId to delete an image',
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
                description: 'Integer ImageId of the image to delete',
            },
        ],
        responses: {
            [HttpStatus.NO_CONTENT]: {
                description: 'A no content',
                content: null,
            },
            [HttpStatus.NOT_FOUND]: {
                description: 'Image with that imageId not found',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ImageNotFoundException',
                        },
                    },
                },
            },
        },
    },
};

module.exports = { deleteImage };
