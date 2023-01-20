const { Superpower } = require('../app/db/models');
const {
    SuperpowerNotFoundException,
    SuperheroNotFoundException,
    SuperpowersNotFoundException,
} = require('../common/exceptions');

class PowerService {
    #powerRepository;

    constructor() {
        this.#powerRepository = Superpower;
    }

    async createHeroPowers(heroId, superpowers = ['']) {
        const powers = superpowers.map(description => ({
            heroId,
            description,
        }));
        const createdPowers = await this.#powerRepository.bulkCreate(powers);
        if (!createdPowers) {
            throw new SuperheroNotFoundException(heroId);
        }
        return createdPowers;
    }

    async getPowersByHeroId(heroId) {
        const powers = await this.#powerRepository.findAll({
            where: { heroId },
        });
        if (!powers.length) {
            throw new SuperpowersNotFoundException(heroId);
        }
        return powers;
    }

    async deletePowerByIds(heroId, powerId) {
        const count = await this.#powerRepository.destroy({
            where: { heroId, id: powerId },
        });
        if (count === 0) {
            throw new SuperpowerNotFoundException(powerId);
        }
    }
}

module.exports = { PowerService };
