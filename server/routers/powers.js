const powerRouter = require('express').Router({ mergeParams: true });
const PowerController = require('../controllers/power.controller');

powerRouter
  .route('/')
  .get(PowerController.getHeroPowers)
  .post(PowerController.createHeroPowers);

powerRouter.delete('/:powerId', PowerController.deletePower);

module.exports = powerRouter;