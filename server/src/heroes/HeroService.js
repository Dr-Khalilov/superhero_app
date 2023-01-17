const { Superhero, Superpower, Image } = require('../app/db/models');
const {
    BadRequestException,
    SuperheroNotFoundException,
    SuperheroesNotFoundException,
} = require('../common/exceptions');
const { paginateResponse } = require('../common/utils/helpers');

class HeroService {
    #heroRepository;
    #powerRepository;
    #imageRepository;

    constructor() {
        this.#heroRepository = Superhero;
        this.#powerRepository = Superpower;
        this.#imageRepository = Image;
    }

    async createHero(data = {}) {
        const { hero, files } = data;
        const createdHero = await this.#heroRepository.create(hero);
        if (!createdHero) {
            throw new BadRequestException(
                `Superhero with that ${hero.nickName} already exist`,
            );
        }
        if (files?.length) {
            const images = files.map(file => ({
                path: file.filename,
                heroId: createdHero.id,
            }));
            await this.#imageRepository.bulkCreate(images);
        }
        if (hero?.superpowers?.length) {
            const powers = hero.superpowers.map(power => ({
                description: power,
                heroId: createdHero.id,
            }));
            await this.#powerRepository.bulkCreate(powers);
        }
        return this.#heroRepository.findAll({
            where: {
                id: createdHero.id,
            },
            include: [
                {
                    model: Superpower,
                    attributes: ['id', 'description'],
                    as: 'superpowers',
                },
                {
                    model: Image,
                    attributes: ['id', 'path'],
                    as: 'images',
                },
            ],
        });
    }

    async getAllHeroes({ limit, offset, page, order }) {
        const { count, rows } = await this.#heroRepository.findAndCountAll({
            include: [
                {
                    model: Superpower,
                    attributes: ['id', 'description'],
                    as: 'superpowers',
                },
                {
                    model: Image,
                    attributes: ['id', 'path'],
                    as: 'images',
                },
            ],
            order: [['nickName', order]],
            limit,
            offset,
        });
        if (count <= 0) {
            throw new SuperheroesNotFoundException();
        }
        return paginateResponse([count, rows], page, limit);
    }

    async getHeroById(id) {
        const foundHero = await this.#heroRepository.findByPk(id, {
            include: [
                {
                    model: Superpower,
                    attributes: ['id', 'description'],
                    as: 'superpowers',
                },
                {
                    model: Image,
                    attributes: ['id', 'path'],
                    as: 'images',
                },
            ],
        });
        if (!foundHero) {
            throw new SuperheroNotFoundException(id);
        }
        return foundHero;
    }

    async updateHeroById(id, data = {}) {
        const { hero, files } = data;
        const [count, [updatedHero]] = await this.#heroRepository.update(hero, {
            where: { id },
            returning: true,
        });
        if (files?.length) {
            const images = files.map(file => ({
                path: file.filename,
                heroId: updatedHero.id,
            }));
            await this.#imageRepository.bulkCreate(images);
        }
        if (hero?.superpowers?.length) {
            const powers = hero.superpowers.map(power => ({
                description: power,
                heroId: updatedHero.id,
            }));
            await this.#powerRepository.bulkCreate(powers);
        }
        if (count === 0) {
            throw new SuperheroNotFoundException(id);
        }
        return this.#heroRepository.findAll({
            where: {
                id: updatedHero.id,
            },
            include: [
                {
                    model: Superpower,
                    attributes: ['id', 'description'],
                    as: 'superpowers',
                },
                {
                    model: Image,
                    attributes: ['id', 'path'],
                    as: 'images',
                },
            ],
        });
    }

    async deleteHeroById(id) {
        const count = await this.#heroRepository.destroy({ where: { id } });
        if (count === 0) {
            throw new SuperheroNotFoundException(id);
        }
    }
}

module.exports = { HeroService };
