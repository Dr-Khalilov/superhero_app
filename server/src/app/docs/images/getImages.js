'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');
const { ListTags } = require('../listTags');

const getImages = {
    get: {
        tags: [ListTags.Images],
        summary: 'Get images',
        description: 'Get images of the superhero',
        operationId: 'getImages',
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
                description: 'Integer HeroId of the superhero to get images',
            },
        ],
        responses: {
            [HttpStatus.OK]: {
                description: 'List images of the superhero',
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

module.exports = { getImages };
