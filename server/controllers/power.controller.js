const { Superpower } = require('../db/models');
const createHttpError = require('http-errors');

module.exports.createHeroPowers = async (req, res, next) => {
  try {
    const {
      params: { heroId },
      body,
    } = req;
    const powers = body.powers.map(description => ({ description, heroId }));
    const createdPowers = await Superpower.bulkCreate(powers);
    if (!createdPowers) {
      return next(createHttpError(400));
    }
    res.status(201).send({ data: createdPowers });
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroPowers = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;
    const powers = await Superpower.findAll({
      where: { heroId },
    });
    res.status(200).send({ data: powers });
  } catch (error) {
    next(error);
  }
};

module.exports.deletePower = async (req, res, next) => {
  try {
    const {
      params: { heroId, powerId },
    } = req;
    const count = await Superpower.destroy({
      where: { heroId, id: powerId },
    });
    if (count === 0) {
      return next(createHttpError(404));
    }
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
