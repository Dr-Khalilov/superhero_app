'use strict';
const { CreateHeroDtoSchema } = require('./createHeroDto');

const UpdateHeroDtoSchema = CreateHeroDtoSchema.partial();

module.exports = { UpdateHeroDtoSchema };
