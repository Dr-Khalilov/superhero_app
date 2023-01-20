'use strict';
const { SortOrders } = require('../../../common/utils/SortOrders');

const queryParamsComponent = {
    sort: {
        type: 'string',
        enum: [SortOrders.ASC, SortOrders.DESC],
        default: SortOrders.ASC,
        example: SortOrders.ASC,
        nullable: true,
        description: 'Sort order',
    },
    page: {
        type: 'integer',
        format: 'int64',
        default: 1,
        minimum: 1,
        example: 1,
        nullable: true,
        description: 'A number of page',
    },
    limit: {
        type: 'integer',
        format: 'int64',
        default: 10,
        minimum: 1,
        maximum: 50,
        examples: {
            min: {
                value: 1,
                summary: 'A sample limit value',
            },
            max: {
                value: 50,
                summary: 'A sample limit value',
            },
        },
        nullable: true,
        description: 'The numbers of items to return',
    },
};

module.exports = { queryParamsComponent };
