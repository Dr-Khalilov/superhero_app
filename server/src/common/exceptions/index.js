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
const { PathNotFoundException } = require('./PathNotFoundException');

module.exports = {
    ApplicationException,
    BadRequestException,
    SuperheroNotFoundException,
    SuperheroesNotFoundException,
    SuperpowerNotFoundException,
    ImageNotFoundException,
    PathNotFoundException,
};
