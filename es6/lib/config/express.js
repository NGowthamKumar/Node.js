"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();
exports.app = app;
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());

const router = _express.default.Router();

exports.router = router;