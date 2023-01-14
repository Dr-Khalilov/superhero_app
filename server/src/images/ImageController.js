const { Router } = require('express');
const { ImageService } = require('./ImageService');
const { HttpStatus } = require('../common/utils/httpStatus');
const { uploadImages } = require('../common/middlewares/fileUpload');

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
            .post(uploadImages, this.#createImages)
            .get(this.#getHeroImages);

        this.router
            .route('/:imageId')
            .get(this.#getImage)
            .delete(this.#deleteImage);
    }

    #createImages = async ({ params: { heroId }, files }, res, next) => {
        try {
            const newImages = await this.#imageService.createHeroImages(
                heroId,
                files,
            );
            return res.status(HttpStatus.CREATED).send({ data: newImages });
        } catch (error) {
            next(error);
        }
    };

    #getHeroImages = async ({ params: { heroId } }, res, next) => {
        try {
            const images = await this.#imageService.getImagesByHeroId(heroId);
            return res.status(HttpStatus.OK).send({ data: images });
        } catch (error) {
            next(error);
        }
    };

    #getImage = async ({ params: { heroId, imageId } }, res, next) => {
        try {
            const image = await this.#imageService.getImageByHeroId(
                heroId,
                imageId,
            );
            return res.status(HttpStatus.OK).send({ data: image });
        } catch (error) {
            next(error);
        }
    };

    #deleteImage = async ({ params: { heroId, imageId } }, res, next) => {
        try {
            await this.#imageService.deleteImageByHeroId(heroId, imageId);
            return res.status(HttpStatus.NO_CONTENT).end();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = { ImageController };
