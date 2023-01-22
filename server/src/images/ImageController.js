const { Router } = require('express');
const { ImageService } = require('./ImageService');
const { SuccessResponse } = require('../common/utils/SuccessResponse');
const { HttpStatus } = require('../common/utils/httpStatus');
const { uploadImages } = require('../common/middlewares/uploadImages');
const { asyncWrapper } = require('../common/utils/helpers');
const { parseIntPipe } = require('../common/middlewares/parseIntPipe');
const { checkHero } = require('../common/middlewares/checkHero');

class ImageController {
    #imageService;
    #router;

    constructor() {
        this.#imageService = new ImageService();
        this.#router = new Router({ mergeParams: true, caseSensitive: true });
        this.#initializeRoutes();
    }

    get router() {
        return this.#router;
    }

    #initializeRoutes() {
        this.router
            .route('/')
            .post(
                parseIntPipe('heroId'),
                uploadImages,
                checkHero,
                this.#createImages,
            )
            .get(parseIntPipe('heroId'), checkHero, this.#getHeroImages);

        this.router
            .route('/:imageId')
            .get(parseIntPipe('imageId'), checkHero, this.#getImage)
            .delete(parseIntPipe('imageId'), checkHero, this.#deleteImage);
    }

    #createImages = asyncWrapper(async ({ params: { heroId }, files }) => {
        const newImages = await this.#imageService.createHeroImages(
            heroId,
            files,
        );
        return new SuccessResponse({ data: newImages }, HttpStatus.CREATED);
    });

    #getHeroImages = asyncWrapper(async ({ params: { heroId } }) => {
        const images = await this.#imageService.getImagesByHeroId(heroId);
        return new SuccessResponse({ data: images });
    });

    #getImage = asyncWrapper(async ({ params: { heroId, imageId } }) => {
        const image = await this.#imageService.getImageByHeroId(
            heroId,
            imageId,
        );
        return new SuccessResponse({ data: image });
    });

    #deleteImage = asyncWrapper(async ({ params: { heroId, imageId } }) => {
        await this.#imageService.deleteImageByHeroId(heroId, imageId);
        return new SuccessResponse(null, HttpStatus.NO_CONTENT);
    });
}

module.exports = { ImageController };
