'use strict';
const { ApplicationException } = require('./ApplicationException');
const { BadRequestException } = require('./BadRequestException');
const { SuperheroNotFoundException } = require('./SuperheroNotFoundException');
const {
    SuperheroesNotFoundException,
} = require('./SuperheroesNotFoundException');
const {
    SuperpowerNotFoundException,
} = require('./SuperpowerNotFoundException');
const { ImageNotFoundException } = require('./ImageNotFoundException');
const { ImagesNotFoundException } = require('./ImagesNotFoundException');
const { ConflictException } = require('./ConflictException');
const { PathNotFoundException } = require('./PathNotFoundException');

module.exports = {
    ApplicationException,
    BadRequestException,
    SuperheroNotFoundException,
    SuperheroesNotFoundException,
    SuperpowerNotFoundException,
    ImageNotFoundException,
    ImagesNotFoundException,
    ConflictException,
    PathNotFoundException,
};
