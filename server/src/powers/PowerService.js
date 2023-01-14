const { Superpower } = require('../app/db/models');
const {
    BadRequestException,
    SuperpowerNotFoundException,
} = require('../common/exceptions');

class PowerService {
    #powerRepository;

    constructor() {
        this.#powerRepository = Superpower;
    }

    async createHeroPowers(heroId, powersData = []) {
        const powers = powersData.map(description => ({
            description,
            heroId,
        }));
        const createdPowers = await this.#powerRepository.bulkCreate(powers);
        if (!createdPowers) {
            throw new BadRequestException('Superpowers cannot be created');
        }
        return createdPowers;
    }

    async getPowersByHeroId(heroId) {
        const powers = await this.#powerRepository.findAll({
            where: { heroId },
        });
        if (!powers) {
            throw new SuperpowerNotFoundException(heroId);
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
