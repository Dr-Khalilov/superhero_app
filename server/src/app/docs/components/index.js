'use strict';
const { heroesComponent } = require('./heroesComponent');
const { powersComponent } = require('./powersComponent');
const { queryParamsComponent } = require('./queryParamsComponent');
const { errorsComponent } = require('./errorsComponent');

const components = {
    components: {
        schemas: {
            ...queryParamsComponent,
            ...heroesComponent,
            ...powersComponent,
            ...errorsComponent,
        },
    },
};

module.exports = { components };
