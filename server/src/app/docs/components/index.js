'use strict';
const { heroesComponent } = require('./heroesComponent');
const { queryParamsComponent } = require('./queryParamsComponent');
const { errorsComponent } = require('./errorsComponent');

const components = {
    components: {
        schemas: {
            ...queryParamsComponent,
            ...heroesComponent,
            ...errorsComponent,
        },
    },
};

module.exports = { components };
