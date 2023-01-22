'use strict';
const { heroesComponent } = require('./heroesComponent');
const { powersComponent } = require('./powersComponent');
const { imagesComponent } = require('./imagesComponent');
const { queryParamsComponent } = require('./queryParamsComponent');
const { errorsComponent } = require('./errorsComponent');

const components = {
    components: {
        schemas: {
            ...queryParamsComponent,
            ...heroesComponent,
            ...powersComponent,
            ...imagesComponent,
            ...errorsComponent,
        },
    },
};

module.exports = { components };
