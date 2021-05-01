const createHttpError = require('http-errors');
const { Superhero, Superpower, Image } = require('../db/models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body, files } = req;
    const hero = await Superhero.create(body);
    if (!hero) {
      return next(createHttpError(400, 'Superhero cannot be create'));
    }
    if (files?.length) {
      const images = files.map(file => ({
        path: file.filename,
        heroId: hero.id,
      }));
      await Image.bulkCreate(images, {
        returning: true,
      });
    }
    if (body?.superpowers?.length) {
      const powers = body.superpowers.map(power => ({
        description: power,
        heroId: hero.id,
      }));
      await Superpower.bulkCreate(powers, {
        returning: true,
      });
    }
    const heroWithData = await Superhero.findAll({
      where: {
        id: hero.id,
      },
      include: [
        {
          model: Superpower,
          attributes: ['id', 'description'],
          as: superpowers,
        },
        {
          model: Image,
          attributes: ['id', 'path'],
          as: 'images',
        },
      ],
    });
    res.status(201).send({ data: heroWithData });
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroes = async (req, res, next) => {
  try {
    const { pagination } = req;
    const heroes = await Superhero.findAll({
      include: [
        {
          model: Superpower,
          attributes: ['id', 'description'],
          as: 'superpowers',
        },
        {
          model: Image,
          attributes: ['id', 'path'],
          as: 'images',
        },
      ],
      order: [['updated_at', 'DESC']],
      ...pagination,
    });
    if (!heroes.length) {
      return next(createHttpError(404, 'Superheroes not found'));
    }
    res.status(200).send({ data: heroes });
  } catch (error) {
    next(error);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const hero = await Superhero.findByPk(id, {
      include: [
        {
          model: Superpower,
          attributes: ['id', 'description'],
          as: 'superpowers',
        },
        {
          model: Image,
          attributes: ['id', 'path'],
          as: 'images',
        },
      ],
    });
    if (!hero) {
      return next(createHttpError(404, 'Superhero not found'));
    }
    res.status(200).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      params: { id },
      body: { files },
      body,
    } = req;
    const [count, [updatedHero]] = await Superhero.update(body, {
      where: { id },
      returning: true,
    });
    if (files?.length) {
      const images = files.map(file => ({
        path: file.filename,
        heroId: updatedHero.id,
      }));
      await Image.bulkCreate(images, {
        returning: true,
      });
    }
    if (body.superpowers) {
      const powers = body.superpowers.map(power => ({
        description: power,
        heroId: updatedHero.id,
      }));
      await Superpower.bulkCreate(powers, {
        returning: true,
      });
    }
    if (count === 0) {
      return next(createHttpError(404, 'Superhero cannot be updated'));
    }
    const heroWithData = await Superhero.findAll({
      where: {
        id: updatedHero.id,
      },
      include: [
        {
          model: Superpower,
          attributes: ['id', 'description'],
          as: 'superpowers',
        },
        {
          model: Image,
          attributes: ['id', 'path'],
          as: 'images',
        },
      ],
    });
    res.status(201).send({ data: heroWithData });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const count = await Superhero.destroy({ where: { id } });
    if (count === 0) {
      return next(createHttpError(404, 'Superhero not found'));
    }
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
