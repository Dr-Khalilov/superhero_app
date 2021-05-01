const heroRouter = require('express').Router();
const imageRouter = require('./image');
const powerRouter = require('./powers');
const HeroController = require('../controllers/hero.controller');
const { uploadImages } = require('../middlewares/file.upload');
const paginate = require('../middlewares/paginate');

heroRouter
  .route('/')
  .get(paginate, HeroController.getHeroes)
  .post(uploadImages, HeroController.createHero);

heroRouter
  .route('/:id')
  .get(HeroController.getHero)
  .put(HeroController.updateHero)
  .delete(HeroController.deleteHero);

heroRouter.use('/:heroId/images/', imageRouter);
heroRouter.use('/:heroId/powers/', powerRouter);

module.exports = heroRouter;