'use strict';
const { App } = require('./App');
const { validateEnv } = require('./common/utils/envValidate.js');
const { HeroController } = require('./heroes/HeroController');
const { ErrorHandler } = require('./common/middlewares/ErrorHandler');

const main = async () => {
    try {
        validateEnv();
        const controllers = [new HeroController()];
        const app = new App(controllers);
        app.listen();
    } catch (err) {
        console.error(err);
    }
};

void main();

ErrorHandler.initializeUnhandledException();
