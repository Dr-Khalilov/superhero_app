const { Router } = require('express');
const { PowerService } = require('./PowerService');
const { HttpStatus } = require('../common/utils/httpStatus');

class PowerController {
    #powerService;
    #router;

    constructor() {
        this.#powerService = new PowerService();
        this.#router = new Router({ mergeParams: true, caseSensitive: true });
        this.#initializeRoutes();
    }

    get router() {
        return this.#router;
    }

    #initializeRoutes() {
        this.router.route('/').post(this.#createPowers).get(this.#getPowers);
        this.router.delete('/:powerId', this.#deletePower);
    }

    #createPowers = async (
        { params: { heroId }, body: { superpowers } },
        res,
        next,
    ) => {
        try {
            const createdPowers = await this.#powerService.createHeroPowers(
                heroId,
                superpowers,
            );
            return res.status(HttpStatus.CREATED).send({ data: createdPowers });
        } catch (error) {
            next(error);
        }
    };

    #getPowers = async ({ params: { heroId } }, res, next) => {
        try {
            const powers = await this.#powerService.getPowersByHeroId(heroId);
            return res.status(HttpStatus.OK).send({ data: powers });
        } catch (error) {
            next(error);
        }
    };

    #deletePower = async ({ params: { heroId, powerId } }, res, next) => {
        try {
            await this.#powerService.deletePowerByIds(heroId, powerId);
            return res.status(HttpStatus.NO_CONTENT).end();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = { PowerController };
