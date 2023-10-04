"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var isMouseOverElement = function isMouseOverElement(_ref) {
  var elem = _ref.elem,
    e = _ref.e;
  var pageY = e.pageY,
    pageX = e.pageX;
  var _elem$getBoundingClie = elem.getBoundingClientRect(),
    left = _elem$getBoundingClie.left,
    right = _elem$getBoundingClie.right,
    bottom = _elem$getBoundingClie.bottom,
    top = _elem$getBoundingClie.top;
  return pageX > left && pageX < right && pageY > top && pageY < bottom;
};
var isMouseHovering = function isMouseHovering(key) {
  if (key === void 0) {
    key = 'isMouseHovering';
  }
  return function (DecoratedComponent) {
    var IsMouseHovering = /*#__PURE__*/function (_Component) {
      _inheritsLoose(IsMouseHovering, _Component);
      function IsMouseHovering() {
        var _this;
        _this = _Component.call(this) || this;
        _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
          var elem = _this.el;
          _this.setState({
            isHoveringOver: isMouseOverElement({
              elem: elem,
              e: e
            })
          });
        });
        _this.state = {
          isHoveringOver: false
        };
        return _this;
      }
      var _proto = IsMouseHovering.prototype;
      _proto.componentDidMount = function componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
      };
      _proto.render = function render() {
        var _this2 = this,
          _hocProps;
        var hocProps = (_hocProps = {}, _hocProps[key] = {
          innerRef: function innerRef(el) {
            return _this2.el = el;
          },
          isHoveringOver: this.state.isHoveringOver
        }, _hocProps);
        return /*#__PURE__*/_react["default"].createElement(DecoratedComponent, _extends({}, this.props, hocProps));
      };
      return IsMouseHovering;
    }(_react.PureComponent);
    IsMouseHovering.displayName = "IsMouseHovering(" + DecoratedComponent.displayName + ")";
    return IsMouseHovering;
  };
};
var _default = exports["default"] = isMouseHovering;
module.exports = exports.default;