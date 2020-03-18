import * as bodyParser from 'body-parser';
import cors from 'cors';

import App from './app';
import { normalizePort } from './utils';
import loggerMiddleware from './middleware/logger';

import PostsController from './controllers/movies.controller';

const PORT = normalizePort(process.env.PORT, 3000);

const app = new App({
    port: PORT,
    controllers: [
        new PostsController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cors(),
        loggerMiddleware,
    ],
})

app.listen();
