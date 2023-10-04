"use strict";

exports.__esModule = true;
exports.RectangleSelector = exports.PointSelector = exports.OvalSelector = void 0;
var _RectangleSelector = _interopRequireDefault(require("./hocs/RectangleSelector"));
exports.RectangleSelector = _RectangleSelector["default"];
var _PointSelector = _interopRequireDefault(require("./hocs/PointSelector"));
exports.PointSelector = _PointSelector["default"];
var _OvalSelector = _interopRequireDefault(require("./hocs/OvalSelector"));
exports.OvalSelector = _OvalSelector["default"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }