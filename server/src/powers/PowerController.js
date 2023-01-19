const { Router } = require('express');
const { PowerService } = require('./PowerService');
const { HttpStatus } = require('../common/utils/httpStatus');
const { SuccessResponse } = require('../common/utils/SuccessResponse');
const { asyncWrapper } = require('../common/utils/helpers');
const { parseIntPipe } = require('../common/middlewares/parseIntPipe');

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
        this.router
            .route('/')
            .post(parseIntPipe('heroId'), this.#createPowers)
            .get(parseIntPipe('heroId'), this.#getPowers);
        this.router.delete('/:powerId', this.#deletePower);
    }

    #createPowers = asyncWrapper(
        async ({ params: { heroId }, body: { superpowers } }) => {
            const createdPowers = await this.#powerService.createHeroPowers(
                heroId,
                superpowers,
            );
            return new SuccessResponse(
                { data: createdPowers },
                HttpStatus.CREATED,
            );
        },
    );

    #getPowers = asyncWrapper(async ({ params: { heroId } }) => {
        const powers = await this.#powerService.getPowersByHeroId(heroId);
        return new SuccessResponse({ data: powers });
    });

    #deletePower = asyncWrapper(async ({ params: { heroId, powerId } }) => {
        await this.#powerService.deletePowerByIds(+heroId, +powerId);
        return new SuccessResponse(null, HttpStatus.NO_CONTENT);
    });
}

module.exports = { PowerController };
