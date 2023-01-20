'use strict';
const { ListTags } = require('./listTags');

const tags = {
    tags: [
        {
            name: ListTags.Superheroes,
        },
        {
            name: ListTags.Superpowers,
        },
        {
            name: ListTags.Images,
        },
    ],
};

module.exports = { tags };
