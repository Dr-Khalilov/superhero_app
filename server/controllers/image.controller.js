const createHttpError = require('http-errors');
const { Image } = require('../db/models');

module.exports.createHeroImages = async (req, res, next) => {
  try {
    const {
      params: { heroId },
      files,
    } = req;
    const images = files.map(file => ({ path: file.filename, heroId }));
    const newImages = await Image.bulkCreate(images);
    if (!newImages) {
      return next(createHttpError(400, 'Image cannot upload'));
    }
    res.status(201).send({ data: newImages });
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroImages = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;
    const images = await Image.findAll({
      where: { heroId },
    });
    if (!images) {
      return next(createHttpError(404, 'Images not found'));
    }
    res.status(200).send({ data: images });
  } catch (error) {
    next(error);
  }
};

module.exports.getImage = async (req, res, next) => {
  try {
    const {
      params: { heroId, imageId },
    } = req;
    const image = await Image.findAll({
      where: { heroId, id: imageId },
    });
    if (!image) {
      return next(createHttpError(404, 'Image not found'));
    }
    res.status(200).send({ data: image });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteImage = async (req, res, next) => {
  try {
    const {
      params: { heroId, imageId },
    } = req;
    const count = await Image.destroy({
      where: { heroId, id: imageId },
    });
    if (count === 0) {
      return next(createHttpError(404, 'Image cannot be deleted'));
    }
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
