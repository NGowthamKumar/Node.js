"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const schema = new _mongoose.default.Schema({
  name: String,
  id: Number,
  password: String
});
module.exports = _mongoose.default.model('crud', schema);