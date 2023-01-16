'use strict';
const { ApplicationException } = require('../exceptions');
const { Logger } = require('../utils/Logger');
const { HttpStatus } = require('../utils/httpStatus');

class ErrorHandler {
    static #logger;

    constructor() {
        this.#logger = new Logger(ErrorHandler.name);
    }

    static errorHandler = async (err, req, res, next) => {
        this.#logger.error(`ERROR caught:===> ${err.stack}`);
        if (err instanceof ApplicationException) {
            return res
                .status(err.statusCode)
                .send({ name: err.name, message: err.message });
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                success: false,
                message: err.message,
                stack: err.stack,
            });
        }
    };

    static initializeUnhandledException = () => {
        process.on('unhandledRejection', (reason, promise) => {
            this.#logger.error({ name: reason.name, message: reason.message });
            this.#logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
            throw reason;
        });

        process.on('uncaughtException', err => {
            this.#logger.error({ name: err.name, message: err.message });
            this.#logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
            process.exit(1);
        });
    };
}

module.exports = { ErrorHandler };
