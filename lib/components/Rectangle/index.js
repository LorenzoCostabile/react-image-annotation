"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border: dashed 2px black;\n  box-shadow: 0px 0px 1px 1px white inset;\n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n"])));
function Rectangle(props) {
  var geometry = props.annotation.geometry;
  if (!geometry) return null;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: props.className,
    style: _extends({
      position: 'absolute',
      left: geometry.x + "%",
      top: geometry.y + "%",
      height: geometry.height + "%",
      width: geometry.width + "%",
      boxShadow: props.active && '0 0 1px 1px yellow inset'
    }, props.style)
  });
}
Rectangle.defaultProps = {
  className: '',
  style: {}
};
var _default = exports["default"] = Rectangle;
module.exports = exports.default;