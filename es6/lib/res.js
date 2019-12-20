"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._error = exports._success = void 0;

const _success = function _success(res, msg) {
  let statusCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  res.status(statusCode).json({
    'status': true,
    'data': msg
  });
  res.end();
};

exports._success = _success;

const _error = function _error(res, msg) {
  let statusCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  if (msg.name === 'MongoError' && msg.code === 11000) {
    res.status(statusCode).json({
      'status': false,
      'error_message': 'Email already exists',
      'error': msg
    });
    res.end();
  }

  res.status(statusCode).json({
    'status': false,
    'error_message': msg
  });
  res.end();
};

exports._error = _error;