import { ErrorRequestHandler } from 'express';
import { HttpError } from './HttpError';

export const ExpressErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof HttpError) {
        return (err as HttpError).send(res);
    }
    return next(err);
}