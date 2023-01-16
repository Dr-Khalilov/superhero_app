const { createServer } = require('http');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const { PathNotFoundException } = require('./common/exceptions');
const { ErrorHandler } = require('./common/middlewares/ErrorHandler');
const { Logger } = require('./common/utils/Logger');
const { configuration } = require('./configs/configuration.js');
const { docs } = require('./app/docs');

class App {
    #app;
    #port;
    #logger;

    constructor(controllers = []) {
        this.#app = express();
        this.#port = configuration.serverPort;
        this.#logger = new Logger(App.name);
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
        this.#app.use(express.json({ limit: '100mb' }));
        this.#app.use(express.urlencoded({ limit: '50mb', extended: true }));
        this.#app.use(express.static(configuration.staticPath));
        this.#app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(docs));
    }

    #initializeControllers(controllers = []) {
        controllers.forEach(controller => {
            this.#app.use('/api', controller.router);
        });
    }

    #initializeErrorHandling() {
        this.#app.use('*', (req, res, next) =>
            next(new PathNotFoundException(req.path)),
        );
        this.#app.use(ErrorHandler.errorHandler);
    }

    async listen() {
        const server = createServer(this.#app);
        server.listen(this.#port);
        server.on('listening', () => {
            this.#logger.log(
                'Express application started!',
                `Application documentation is available at http://localhost:${
                    this.#port
                }/api/docs`,
            );
        });

        process.on('SIGTERM', () => {
            this.#logger.log('SIGTERM received');
            server.close();
        });
    }
}

module.exports = { App };
