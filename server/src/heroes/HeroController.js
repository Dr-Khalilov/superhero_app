const { Router } = require('express');
const { HeroService } = require('./HeroService');
const { PowerController } = require('../powers/PowerController');
const { ImageController } = require('../images/ImageController');
const { HttpStatus } = require('../common/utils/httpStatus');
const { paginate } = require('../common/middlewares/paginate');
const { uploadImages } = require('../common/middlewares/fileUpload');

class HeroController {
    #heroService;
    #powerController;
    #imageController;
    #router;
    #path = '/superheroes';

    constructor() {
        this.#heroService = new HeroService();
        this.#powerController = new PowerController();
        this.#imageController = new ImageController();
        this.#router = new Router({ mergeParams: true, caseSensitive: true });
        this.#initializeRoutes();
    }

    #initializeRoutes() {
        this.router.post(this.#path, uploadImages, this.#createOne);
        this.router.get(this.#path, paginate, this.#getMany);
        this.router
            .route(`${this.#path}/:id`)
            .get(this.#getOne)
            .patch(uploadImages, this.#updateOne)
            .delete(this.#deleteOne);
        this.router.use('/:heroId/powers/', this.#powerController.router);
        this.router.use('/:heroId/images/', this.#imageController.router);
    }

    get router() {
        return this.#router;
    }

    #createOne = async ({ body: hero, files }, res, next) => {
        try {
            const heroWithData = await this.#heroService.createHero({
                hero,
                files,
            });
            return res.status(HttpStatus.CREATED).send({ data: heroWithData });
        } catch (error) {
            next(error);
        }
    };

    #getMany = async ({ pagination }, res, next) => {
        try {
            const heroes = await this.#heroService.getAllHeroes(pagination);
            return res.status(HttpStatus.OK).send(heroes);
        } catch (error) {
            next(error);
        }
    };

    #getOne = async ({ params: { id } }, res, next) => {
        try {
            const foundHero = await this.#heroService.getHeroById(id);
            return res.status(HttpStatus.OK).send({ data: foundHero });
        } catch (error) {
            next(error);
        }
    };

    #updateOne = async ({ params: { id }, body: hero, files }, res, next) => {
        try {
            const heroWithData = await this.#heroService.updateHeroById(id, {
                hero,
                files,
            });
            return res.status(HttpStatus.ACCEPTED).send({ data: heroWithData });
        } catch (error) {
            next(error);
        }
    };

    #deleteOne = async ({ params: { id } }, res, next) => {
        try {
            await this.#heroService.deleteHeroById(id);
            return res.status(HttpStatus.NO_CONTENT).end();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = { HeroController };
