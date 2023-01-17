'use strict';
const db = require('./app/db/models');
const { App } = require('./App');
const { HeroController } = require('./heroes/HeroController');
const { ErrorHandler } = require('./common/middlewares/ErrorHandler');
const { Logger } = require('./common/utils/Logger');
const { validateEnv } = require('./common/utils/validateEnv.js');
const { connectToDatabase } = require('./common/utils/helpers');

const main = async () => {
    try {
        await validateEnv();
        await connectToDatabase(db);
        const controllers = [new HeroController()];
        const app = new App(controllers);
        await app.listen();
    } catch (err) {
        new Logger(main.name).error(err);
    }
};

void main();

ErrorHandler.initializeUnhandledException();
