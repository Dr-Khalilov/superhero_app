'use strict';
const { ApplicationException } = require('../exceptions');
const { HttpStatus } = require('../utils/httpStatus');

class ErrorHandler {
    static errorHandler = async (err, req, res, next) => {
        console.error(
            '\x1b[31m',
            `ERROR caught:->>>>> ${err.stack}`,
            '\x1b[0m',
        );
        if (err instanceof ApplicationException) {
            return res
                .status(err.status)
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
            console.error({ name: reason.name, message: reason.message });
            console.error('UNHANDLED REJECTION! 💥 Shutting down...');
            throw reason;
        });

        process.on('uncaughtException', err => {
            console.error(err.name, err.message);
            console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
            process.exit(1);
        });
    };
}

module.exports = { ErrorHandler };
