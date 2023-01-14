const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const { configuration } = require('./configs/configuration.js');
const { PathNotFoundException } = require('./common/exceptions');
const { ErrorHandler } = require('./common/middlewares/ErrorHandler');

class App {
    #app;
    #port;

    constructor(controllers = []) {
        this.#app = express();
        this.#port = configuration.serverPort;
        this.#initializeMiddlewares();
        this.#initializeControllers(controllers);
        this.#initializeErrorHandling();
    }

    #initializeMiddlewares() {
        this.#app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Methods',
                'GET,POST,DELETE,OPTIONS,PUT',
            );
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
        this.#app.use(cors());
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));
        this.#app.use(express.static(configuration.staticPath));
        // this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(docs));
    }

    #initializeControllers(controllers = []) {
        controllers.forEach(controller => {
            this.#app.use('/api', controller.router);
        });
    }

    #initializeErrorHandling() {
        this.#app.use((req, res, next) =>
            next(new PathNotFoundException(req.path)),
        );
        this.#app.use(ErrorHandler.errorHandler);
    }

    listen() {
        const server = createServer(this.#app);
        server.listen(this.#port);
        server.on('listening', () => {
            console.info(
                `Express App started on http://localhost:${this.#port}`,
            );
        });

        process.on('SIGTERM', () => {
            console.info('SIGTERM received');
            server.close();
        });
    }
}

module.exports = { App };
