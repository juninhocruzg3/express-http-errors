const assert = require('assert');
const { equal } = require('assert');
const { ExpressErrorHandler, BadRequestError, NotFoundError, InternalServerError } = require('../lib');

describe('Error handling', function () {
  var req;
  var res;
  var next;
  beforeEach(function () {
    req = {};
    res = {};
    next = function () {};
  });
  it('ExpressErrorHandler should be a middleware', () => {
    var middleware = ExpressErrorHandler;
    equal(typeof middleware, 'function');
  });

  it('sending BadRequestError should return error 400', () => {
    const error = new BadRequestError('message test');
    let status = 0;
    let response = undefined;
    const res = {
      status: (statusCode) => {
        status = statusCode;
        return {
          send: (body) => {
            response = body;
          }
        }
      }
    }
    ExpressErrorHandler(error, req, res, next);
    assert.equal(status, 400, 'It not return 400')
    assert.equal(response.message, 'message test', 'It not return our message')
  });

  it('sending NotFoundError should return error 404', () => {
    const error = new NotFoundError('message test');
    let status = 0;
    let response = undefined;
    const res = {
      status: (statusCode) => {
        status = statusCode;
        return {
          send: (body) => {
            response = body;
          }
        }
      }
    }
    ExpressErrorHandler(error, req, res, next);
    assert.equal(status, 404, 'It not return 404')
    assert.equal(response.message, 'message test', 'It not return our message')
  });

  it('sending NotFoundError should return error 500', () => {
    const error = new InternalServerError('message test');
    let status = 0;
    let response = undefined;
    const res = {
      status: (statusCode) => {
        status = statusCode;
        return {
          send: (body) => {
            response = body;
          }
        }
      }
    }
    ExpressErrorHandler(error, req, res, next);
    assert.equal(status, 500, 'It not return 500')
    assert.equal(response.message, 'message test', 'It not return our message')
  });
});
