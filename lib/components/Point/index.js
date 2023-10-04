"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border: solid 3px rgb(57, 255, 20);\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.3),\n    0 0 0 2px rgba(0,0,0,0.2),\n    0 5px 4px rgba(0,0,0,0.4);\n  height: 16px;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0);\n  width: 16px;\n"])));
function Point(props) {
  var geometry = props.annotation.geometry;
  if (!geometry) return null;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    style: {
      top: geometry.y + "%",
      left: geometry.x + "%"
    }
  });
}
var _default = exports["default"] = Point;
module.exports = exports.default;