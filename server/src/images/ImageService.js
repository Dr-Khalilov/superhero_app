const { Image } = require('../app/db/models');
const {
    SuperheroNotFoundException,
    ImageNotFoundException,
} = require('../common/exceptions');

class ImageService {
    #imageRepository;

    constructor() {
        this.#imageRepository = Image;
    }

    async createHeroImages(heroId, files = []) {
        const images = files.map(file => ({ path: file.filename, heroId }));
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
        if (!images) {
            throw new SuperheroNotFoundException(heroId);
        }
        return images;
    }

    async getImageByHeroId(heroId, imageId) {
        const image = await this.#imageRepository.findAll({
            where: { heroId, id: imageId },
        });
        if (!image) {
            throw new ImageNotFoundException(imageId);
        }
        return image;
    }

    async deleteImageByHeroId(heroId, imageId) {
        const count = await this.#imageRepository.destroy({
            where: { heroId, id: imageId },
        });
        if (count === 0) {
            throw new ImageNotFoundException(imageId);
        }
    }
}

module.exports = { ImageService };
