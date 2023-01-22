'use strict';

const powerComponent = {
    id: {
        type: 'integer',
        example: 1,
        description: 'Primary key',
    },
    heroId: {
        type: 'integer',
        example: 1,
        description: 'Primary key',
    },
    description: {
        type: 'string',
        description: 'The description of the power',
        example: 'Solar invulnerability',
    },
    createdAt: {
        type: 'string',
        format: 'timestamp',
        description: 'The created date of instance',
        example: new Date().toISOString(),
    },
    updatedAt: {
        type: 'string',
        format: 'timestamp',
        description: 'The updated date of instance',
        example: new Date().toISOString(),
    },
};

module.exports = { powerComponent };
