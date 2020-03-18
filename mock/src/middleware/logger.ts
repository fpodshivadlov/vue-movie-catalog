import { Request, Response, RequestHandler } from 'express'

const loggerMiddleware: RequestHandler = (req: Request, resp: Response, next) => {

    console.log('Request logged:', req.method, req.path);
    next();
}

export default loggerMiddleware
