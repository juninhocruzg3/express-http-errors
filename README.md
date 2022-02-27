# Express HTTP Errors Handler

[![Build Status](https://travis-ci.org/juninhocruzg3/express-http-errors.svg?branch=master)](https://travis-ci.org/juninhocruzg3/express-http-errors)
[![npm version](https://badge.fury.io/js/%40acruzjr%2Fexpress-http-errors.svg)](https://badge.fury.io/js/%40acruzjr%2Fexpress-http-errors)

A simple node.js module that handle HTTP Errors for express. You can handle HTTP errors easier using object-orientation.

## Install

`npm install @acruzjr/express-http-errors`

## Usage

Initialize your express app, and make it uses ExpressErrorHandle.
Throw your exception inside express NextFunction.

```ts
var app = require("express")();
var { ExpressErrorHandler } = require("@acruzjr/express-http-errors");

// Make the app use error handler middleware
app.use(ExpressErrorHandler);

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

app.listen(3000);
```

**API**

`HTTPErrorName(message, error)`

**message** - string

**error** - any, error object

```
new BadRequestError(message: string, error: unknown)
```

## Examples

Examples are available [here](https://github.com/juninhocruzg3/express-http-errors/tree/master/examples)

## Test

`npm test`
