'use strict';
const { basicInfo } = require('./basicInfo');
const { servers } = require('./servers');
const { tags } = require('./tags');
const { components } = require('./components');
const { heroes } = require('./heroes');

const docs = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    ...heroes,
};

module.exports = { docs };
