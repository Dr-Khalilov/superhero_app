const imageRouter = require('express').Router({ mergeParams: true });
const ImageController = require('../controllers/image.controller');
const { uploadImages } = require('../middlewares/file.upload');

imageRouter
  .route('/')
  .get(ImageController.getHeroImages)
  .post(uploadImages, ImageController.createHeroImages);

ImageRouter.route('/:imageId')
  .get(ImageController.getImage)
  .delete(ImageController.deleteImage);

module.exports = imageRouter;
