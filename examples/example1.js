var app = require('express')();

import { ExpressErrorHandler, BadRequestError, InternalServerError, NotFoundError } from '../lib/index';

app.get(
  '/test400',
  middleware400
);

// curl -s localhost:3000/test400
// Expect BadRequest Error
function middleware400(req, res, next) {
  return next(new BadRequestError('You typed something wrong. It\'s never late to fix it.'))
}

app.get(
  '/test404',
  middleware404
);

// curl -s localhost:3000/test404
// Expect NotFound Error
function middleware404(req, res, next) {
  return next(new NotFoundError('You are beyond borders'))
}

app.get(
  '/test500',
  middleware500
);

// curl -s localhost:3000/test500
// Expect InternalServerError
function middleware500(req, res, next) {
  return next(new InternalServerError('Well, this is embarrassing...'))
}

// Make the app use error handler middleware AFTER ALL middlewares and routes uses.
app.use(ExpressErrorHandler);

app.listen(3000);