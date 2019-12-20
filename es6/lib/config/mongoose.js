"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect('mongodb://localhost:27017/mydb', {
  'useUnifiedTopology': true,
  'useNewUrlParser': true
}, function (err) {
  if (err) console.log("Can't connect MongoDB");else console.log("Connected to MongoDb...");
}); //export const conn = mongoose.Connection;