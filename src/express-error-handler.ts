import { ErrorRequestHandler } from 'express';
import { HttpError } from './HttpError';

export const ExpressErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof HttpError) {
        (err as HttpError).send(res);
    }

    return next(err);
}