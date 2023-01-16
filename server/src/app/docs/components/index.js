'use strict';
const { heroesComponent } = require('./heroesComponent');
const { queryParamsComponent } = require('./queryParamsComponent');
const { errorsComponent } = require('./errorsComponent');

const components = {
    components: {
        schemas: {
            ...heroesComponent,
            ...queryParamsComponent,
            ...errorsComponent,
        },
    },
};

module.exports = { components };
