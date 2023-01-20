const { Router } = require('express');
const { HeroService } = require('./HeroService');
const { PowerController } = require('../powers/PowerController');
const { ImageController } = require('../images/ImageController');
const { HttpStatus } = require('../common/utils/httpStatus');
const { SuccessResponse } = require('../common/utils/SuccessResponse');
const { uploadImages } = require('../common/middlewares/uploadImages');
const { paginate } = require('../common/middlewares/paginate');
const { validate } = require('../common/middlewares/validate');
const { asyncWrapper } = require('../common/utils/helpers');
const { parseIntPipe } = require('../common/middlewares/parseIntPipe');
const { CreateHeroDtoSchema } = require('./dto/createHeroDTO');
const { UpdateHeroDtoSchema } = require('./dto/updateHeroDTO');

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
        this.router.post(
            this.#path,
            uploadImages,
            validate(CreateHeroDtoSchema),
            this.#createOne,
        );
        this.router.get(this.#path, paginate, this.#getMany);
        this.router
            .route(`${this.#path}/:id`)
            .get(parseIntPipe('id'), this.#getOne)
            .patch(
                parseIntPipe('id'),
                uploadImages,
                validate(UpdateHeroDtoSchema),
                this.#updateOne,
            )
            .delete(parseIntPipe('id'), this.#deleteOne);
        this.router.use(
            `${this.#path}/:heroId/powers`,
            this.#powerController.router,
        );
        this.router.use(
            `${this.#path}/:heroId/images`,
            this.#imageController.router,
        );
    }

    get router() {
        return this.#router;
    }

    #createOne = asyncWrapper(async ({ body: hero, files }) => {
        const heroWithData = await this.#heroService.createHero({
            hero,
            files,
        });
        return new SuccessResponse({ data: heroWithData }, HttpStatus.CREATED);
    });

    #getMany = asyncWrapper(async ({ pagination }) => {
        const heroes = await this.#heroService.getAllHeroes(pagination);
        return new SuccessResponse(heroes);
    });

    #getOne = asyncWrapper(async ({ params: { id } }) => {
        const foundHero = await this.#heroService.getHeroById(id);
        return new SuccessResponse({ data: foundHero });
    });

    #updateOne = asyncWrapper(async ({ params: { id }, body, files }) => {
        const heroWithData = await this.#heroService.updateHeroById(id, {
            body,
            files,
        });
        return new SuccessResponse({ data: heroWithData }, HttpStatus.ACCEPTED);
    });

    #deleteOne = asyncWrapper(async ({ params: { id } }) => {
        await this.#heroService.deleteHeroById(id);
        return new SuccessResponse(null, HttpStatus.NO_CONTENT);
    });
}

module.exports = { HeroController };
