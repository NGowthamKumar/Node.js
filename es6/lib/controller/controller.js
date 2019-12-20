"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.cre = void 0;

var _schema = _interopRequireDefault(require("../models/schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import dschema from '../models/schema';
//import conn from '../config/mongoose'
const cre = (req, res) => {
  console.log("function called");
  var note = new _schema.default(req.body);
  note.save(function (err, result) {
    if (err) res.send("Can't insert");else res.send("Inserted");
  });
};

exports.cre = cre;

const del = (req, res) => {
  //var note = new crud(req.body);
  _schema.default.deleteOne({
    id: req.body.id
  }, function (err, result) {
    if (err) {
      res.send("can't delete");
    } else res.send("deleted");
  });
};

exports.del = del;