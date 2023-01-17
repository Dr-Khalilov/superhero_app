'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');

const errorsComponent = {
    BadRequestException: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Error message',
                example:
                    'Superhero with that nickName: Superman or with that realName: Clark Kent already exist!',
            },
            statusCode: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.BAD_REQUEST,
            },
        },
    },
    SuperheroesNotFoundException: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Superheroes not found in database',
            },
            statusCode: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    SuperheroNotFoundException: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Superhero with that id: 1 not found',
            },
            statusCode: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    SuperpowerNotFoundException: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Superpower with that id: 1 not found!',
            },
            statusCode: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    ImageNotFoundException: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Image with that id: 1 not found!',
            },
            statusCode: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    PathNotFoundException: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Error message',
                example: 'The Requested path: *** not found',
            },
            statusCode: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    ServerErrorException: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Server error! Please try again!',
            },
            statusCode: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.INTERNAL_SERVER_ERROR,
            },
        },
    },
};

module.exports = { errorsComponent };
