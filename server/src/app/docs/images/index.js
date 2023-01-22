'use strict';
const { createImages } = require('./createImages');
const { deleteImage } = require('./deleteImage');
const { getImage } = require('./getImage');
const { getImages } = require('./getImages');

const images = {
    '/superheroes/{heroId}/images': {
        ...createImages,
        ...getImages,
    },
    '/superheroes/{heroId}/images/{imageId}': {
        ...deleteImage,
        ...getImage,
    },
};

module.exports = { images };
