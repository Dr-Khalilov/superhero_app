'use strict';

const queryParamsComponent = {
    page: {
        type: 'integer',
        description: 'A number of page',
        example: 1,
    },
    limit: {
        type: 'integer',
        description: 'A limit of resources',
        example: 10,
    },
    offset: {
        type: 'integer',
        description: 'An offset of resources',
        example: 5,
    },

    id: {
        type: 'integer',
        description: 'An id',
        example: 1,
    },
};

module.exports = { queryParamsComponent };
