const { Superhero, Superpower, Image } = require('../app/db/models');
const { PowerService } = require('../powers/PowerService');
const { ImageService } = require('../images/ImageService');
const {
    SuperheroNotFoundException,
    SuperheroesNotFoundException,
    ConflictException,
} = require('../common/exceptions');
const { SequelizeErrors } = require('../app/constants/appConstants');
const { paginateResponse, removeFile } = require('../common/utils/helpers');

class HeroService {
    #heroRepository;
    #powerService;
    #imageService;

    constructor() {
        this.#heroRepository = Superhero;
        this.#powerService = new PowerService();
        this.#imageService = new ImageService();
    }

    async createHero({ hero, files }) {
        try {
            const createdHero = await this.#heroRepository.create(hero);

            if (hero.superpowers?.length) {
                await this.#powerService.createHeroPowers(
                    createdHero.id,
                    hero.superpowers,
                );
            }
            if (files?.length) {
                await this.#imageService.createHeroImages(
                    createdHero.id,
                    files,
                );
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
        } catch (err) {
            if (err.name === SequelizeErrors.SequelizeUniqueConstraintError) {
                throw new ConflictException(
                    `Superhero with that nickName: ${hero.nickName} or that realName: ${hero.realName} already exist`,
                );
            }
        }
    }

    async getAllHeroes({ limit, offset, page, sort }) {
        const { rows, count } = await this.#heroRepository.findAndCountAll({
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
            order: [['nickName', sort]],
            limit,
            offset,
            distinct: true,
        });

        if (count === 0) {
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
        const { body, files } = data;
        const [count, [updatedHero]] = await this.#heroRepository.update(body, {
            where: { id },
            returning: true,
        });
        if (files?.length) {
            await this.#imageService.createHeroImages(updatedHero.id, files);
        }
        if (body.superpowers?.length) {
            await this.#powerService.createHeroPowers(
                updatedHero.id,
                body.superpowers,
            );
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
        const images = await this.#imageService.getImagesByHeroId(id);
        for await (const { path } of images) {
            const arrPaths = path.split('/');
            const normalizePath = `${__dirname}/../../public/${arrPaths[3]}/${arrPaths[4]}`;
            await removeFile(normalizePath);
        }
        const count = await this.#heroRepository.destroy({ where: { id } });
        if (count === 0) {
            throw new SuperheroNotFoundException(id);
        }
    }
}

module.exports = { HeroService };
