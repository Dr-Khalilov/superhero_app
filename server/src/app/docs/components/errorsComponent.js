'use strict';
const { HttpStatus } = require('../../../common/utils/httpStatus');

const errorsComponent = {
    BadRequestException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'BadRequestException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Bad request',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.BAD_REQUEST,
            },
        },
    },
    SuperheroesNotFoundException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'SuperheroesNotFoundException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Superheroes not found in database',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    SuperheroNotFoundException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'SuperheroNotFoundException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Superhero with that id: 1 not found',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    SuperpowerNotFoundException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'SuperpowerNotFoundException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Superpower with that id: 1 not found!',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    ImageNotFoundException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'ImageNotFoundException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Image with that id: 1 not found!',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    ImagesNotFoundException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'ImagesNotFoundException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'No images found for superhero with that id: 1',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    ConflictException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'ConflictException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Something already exist',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.CONFLICT,
            },
        },
    },
    ValidationException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'ValidationException',
            },
            errors: {
                type: 'array',
                description: 'Some errors',
                example: 'Something field to small',
            },
        },
    },
    PathNotFoundException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'PathNotFoundException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'The Requested path: *** not found',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.NOT_FOUND,
            },
        },
    },
    ServerErrorException: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Error name',
                example: 'ServerErrorException',
            },
            message: {
                type: 'string',
                description: 'Error message',
                example: 'Server error! Please try again!',
            },
            status: {
                type: 'integer',
                description: 'Error status code',
                example: HttpStatus.INTERNAL_SERVER_ERROR,
            },
        },
    },
};

module.exports = { errorsComponent };
