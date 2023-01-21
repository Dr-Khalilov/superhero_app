'use strict';
const { CreateHeroDtoSchema } = require('./createHeroDTO');

const UpdateHeroDtoSchema = CreateHeroDtoSchema.partial();

module.exports = { UpdateHeroDtoSchema };
