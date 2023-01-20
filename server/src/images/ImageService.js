const { Image } = require('../app/db/models');
const { configuration } = require('../configs/configuration');
const { removeFile } = require('../common/utils/helpers');
const {
    SuperheroNotFoundException,
    ImageNotFoundException,
    ImagesNotFoundException,
} = require('../common/exceptions');

class ImageService {
    #imageRepository;
    #pathImage;

    constructor() {
        this.#imageRepository = Image;
        this.#pathImage = this.#definePathToImages(configuration);
    }

    #definePathToImages(configuration = {}) {
        let path;
        if (configuration.deployHost) {
            path = `${configuration.deployHost}/images/`;
        } else {
            path = `http://localhost:${configuration.serverPort}/images/`;
        }
        return path;
    }

    async createHeroImages(heroId, files = []) {
        const images = files.map(file => ({
            path: `${this.#pathImage}${file.filename}`,
            heroId,
        }));
        const newImages = await this.#imageRepository.bulkCreate(images);
        if (!newImages) {
            throw new SuperheroNotFoundException(heroId);
        }
        return newImages;
    }

    async getImagesByHeroId(heroId) {
        const images = await this.#imageRepository.findAll({
            where: { heroId },
        });
        if (!images.length) {
            throw new ImagesNotFoundException(heroId);
        }
        return images;
    }

    async getImageByHeroId(heroId, imageId) {
        const image = await this.#imageRepository.findAll({
            where: { heroId, id: imageId },
        });
        if (!image.length) {
            throw new ImageNotFoundException(imageId);
        }
        return image;
    }

    async deleteImageByHeroId(heroId, imageId) {
        const [{ path }] = await this.getImageByHeroId(heroId, imageId);
        const arrPaths = path.split('/');
        const normalizePath = `${__dirname}/../../public/${arrPaths[3]}/${arrPaths[4]}`;
        await removeFile(normalizePath);
        const count = await this.#imageRepository.destroy({
            where: { heroId, id: imageId },
        });
        if (count === 0) {
            throw new ImageNotFoundException(imageId);
        }
    }
}

module.exports = { ImageService };
