const { Superpower } = require('../app/db/models');
const { SuperpowerNotFoundException } = require('../common/exceptions');

class PowerService {
    #powerRepository;

    constructor() {
        this.#powerRepository = Superpower;
    }

    async createHeroPowers(heroId, superpowers = []) {
        const powers = superpowers.map(description => ({
            heroId,
            description,
        }));
        return this.#powerRepository.bulkCreate(powers);
    }

    async getPowersByHeroId(heroId) {
        return this.#powerRepository.findAll({
            where: { heroId },
        });
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
