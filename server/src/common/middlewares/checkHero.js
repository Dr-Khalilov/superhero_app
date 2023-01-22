'use strict';
const { HeroService } = require('../../heroes/HeroService');

const checkHero = async ({ params: { heroId } }, res, next) => {
    try {
        await new HeroService().getHeroById(heroId);
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { checkHero };
