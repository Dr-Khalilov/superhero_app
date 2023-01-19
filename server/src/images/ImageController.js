const { Router } = require('express');
const { ImageService } = require('./ImageService');
const { HttpStatus } = require('../common/utils/httpStatus');
const { SuccessResponse } = require('../common/utils/SuccessResponse');
const { uploadImages } = require('../common/middlewares/uploadImages');
const { asyncWrapper } = require('../common/utils/helpers');
const { parseIntPipe } = require('../common/middlewares/parseIntPipe');

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
            .post(parseIntPipe('imageId'), uploadImages, this.#createImages)
            .get(parseIntPipe('imageId'), this.#getHeroImages);

        this.router
            .route('/:imageId')
            .get(parseIntPipe('imageId'), this.#getImage)
            .delete(parseIntPipe('imageId'), this.#deleteImage);
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
