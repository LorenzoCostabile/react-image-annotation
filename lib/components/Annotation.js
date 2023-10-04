"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compose = _interopRequireDefault(require("../utils/compose"));
var _isMouseHovering = _interopRequireDefault(require("../utils/isMouseHovering"));
var _withRelativeMousePos = _interopRequireDefault(require("../utils/withRelativeMousePos"));
var _defaultProps = _interopRequireDefault(require("./defaultProps"));
var _Overlay = _interopRequireDefault(require("./Overlay"));
var _templateObject, _templateObject2, _templateObject3, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  clear: both;\n  position: relative;\n  width: 100%;\n  &:hover ", " {\n    opacity: 1;\n  }\n  touch-action: ", ";\n"])), _Overlay["default"], function (props) {
  return props.allowTouch ? "pinch-zoom" : "auto";
});
var Img = _styledComponents["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  filter: brightness(0.7) grayscale(1) contrast(1.2);\n"])));
var Items = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])));
var Target = Items;
var _default = exports["default"] = (0, _compose["default"])((0, _isMouseHovering["default"])(), (0, _withRelativeMousePos["default"])())((_class = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Annotation, _Component);
  function Annotation() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "targetRef", _react["default"].createRef());
    _defineProperty(_assertThisInitialized(_this), "addTargetTouchEventListeners", function () {
      // Safari does not recognize touch-action CSS property,
      // so we need to call preventDefault ourselves to stop touch from scrolling
      // Event handlers must be set via ref to enable e.preventDefault()
      // https://github.com/facebook/react/issues/9809

      _this.targetRef.current.ontouchstart = _this.onTouchStart;
      _this.targetRef.current.ontouchend = _this.onTouchEnd;
      _this.targetRef.current.ontouchmove = _this.onTargetTouchMove;
      _this.targetRef.current.ontouchcancel = _this.onTargetTouchLeave;
    });
    _defineProperty(_assertThisInitialized(_this), "removeTargetTouchEventListeners", function () {
      _this.targetRef.current.ontouchstart = undefined;
      _this.targetRef.current.ontouchend = undefined;
      _this.targetRef.current.ontouchmove = undefined;
      _this.targetRef.current.ontouchcancel = undefined;
    });
    _defineProperty(_assertThisInitialized(_this), "setInnerRef", function (el) {
      _this.container = el;
      _this.props.relativeMousePos.innerRef(el);
      _this.props.innerRef(el);
    });
    _defineProperty(_assertThisInitialized(_this), "getSelectorByType", function (type) {
      return _this.props.selectors.find(function (s) {
        return s.TYPE === type;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getTopAnnotationAt", function (x, y) {
      var annotations = _this.props.annotations;
      var _assertThisInitialize = _assertThisInitialized(_this),
        container = _assertThisInitialize.container,
        getSelectorByType = _assertThisInitialize.getSelectorByType;
      if (!container) return;
      var intersections = annotations.map(function (annotation) {
        var geometry = annotation.geometry;
        var selector = getSelectorByType(geometry.type);
        return selector.intersects({
          x: x,
          y: y
        }, geometry, container) ? annotation : false;
      }).filter(function (a) {
        return !!a;
      }).sort(function (a, b) {
        var aSelector = getSelectorByType(a.geometry.type);
        var bSelector = getSelectorByType(b.geometry.type);
        return aSelector.area(a.geometry, container) - bSelector.area(b.geometry, container);
      });
      return intersections[0];
    });
    _defineProperty(_assertThisInitialized(_this), "onTargetMouseMove", function (e) {
      _this.props.relativeMousePos.onMouseMove(e);
      _this.onMouseMove(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onTargetTouchMove", function (e) {
      _this.props.relativeMousePos.onTouchMove(e);
      _this.onTouchMove(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onTargetMouseLeave", function (e) {
      _this.props.relativeMousePos.onMouseLeave(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onTargetTouchLeave", function (e) {
      _this.props.relativeMousePos.onTouchLeave(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      return _this.callSelectorMethod('onMouseUp', e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      return _this.callSelectorMethod('onMouseDown', e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
      return _this.callSelectorMethod('onMouseMove', e);
    });
    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      return _this.callSelectorMethod("onTouchStart", e);
    });
    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      return _this.callSelectorMethod("onTouchEnd", e);
    });
    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      return _this.callSelectorMethod("onTouchMove", e);
    });
    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      return _this.callSelectorMethod('onClick', e);
    });
    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {
      _this.props.onSubmit(_this.props.value);
    });
    _defineProperty(_assertThisInitialized(_this), "callSelectorMethod", function (methodName, e) {
      if (_this.props.disableAnnotation) {
        return;
      }
      if (!!_this.props[methodName]) {
        _this.props[methodName](e);
      } else {
        var selector = _this.getSelectorByType(_this.props.type);
        if (selector && selector.methods[methodName]) {
          var value = selector.methods[methodName](_this.props.value, e);
          if (typeof value === 'undefined') {
            if (process.env.NODE_ENV !== 'production') {
              console.error("\n              " + methodName + " of selector type " + _this.props.type + " returned undefined.\n              Make sure to explicitly return the previous state\n            ");
            }
          } else {
            _this.props.onChange(value);
          }
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "shouldAnnotationBeActive", function (annotation, top) {
      if (_this.props.activeAnnotations) {
        var isActive = !!_this.props.activeAnnotations.find(function (active) {
          return _this.props.activeAnnotationComparator(annotation, active);
        });
        return isActive || top === annotation;
      } else {
        return top === annotation;
      }
    });
    return _this;
  }
  var _proto = Annotation.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.allowTouch) {
      this.addTargetTouchEventListeners();
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.allowTouch !== prevProps.allowTouch) {
      if (this.props.allowTouch) {
        this.addTargetTouchEventListeners();
      } else {
        this.removeTargetTouchEventListeners();
      }
    }
  };
  _proto.render = function render() {
    var _this2 = this;
    var props = this.props;
    var isMouseHovering = props.isMouseHovering,
      renderHighlight = props.renderHighlight,
      renderContent = props.renderContent,
      renderSelector = props.renderSelector,
      renderEditor = props.renderEditor,
      renderOverlay = props.renderOverlay,
      allowTouch = props.allowTouch;
    var topAnnotationAtMouse = this.getTopAnnotationAt(this.props.relativeMousePos.x, this.props.relativeMousePos.y);
    return /*#__PURE__*/_react["default"].createElement(Container, {
      style: props.style,
      innerRef: isMouseHovering.innerRef,
      onMouseLeave: this.onTargetMouseLeave,
      onTouchCancel: this.onTargetTouchLeave,
      allowTouch: allowTouch
    }, /*#__PURE__*/_react["default"].createElement(Img, {
      className: props.className,
      style: props.style,
      alt: props.alt,
      src: props.src,
      draggable: false,
      innerRef: this.setInnerRef
    }), /*#__PURE__*/_react["default"].createElement(Items, null, props.annotations.map(function (annotation) {
      return renderHighlight({
        key: annotation.data.id,
        annotation: annotation,
        active: _this2.shouldAnnotationBeActive(annotation, topAnnotationAtMouse)
      });
    }), !props.disableSelector && props.value && props.value.geometry && renderSelector({
      annotation: props.value
    })), /*#__PURE__*/_react["default"].createElement(Target, {
      innerRef: this.targetRef,
      onClick: this.onClick,
      onMouseUp: this.onMouseUp,
      onMouseDown: this.onMouseDown,
      onMouseMove: this.onTargetMouseMove
    }), !props.disableOverlay && renderOverlay({
      type: props.type,
      annotation: props.value
    }), props.annotations.map(function (annotation) {
      return _this2.shouldAnnotationBeActive(annotation, topAnnotationAtMouse) && renderContent({
        key: annotation.data.id,
        annotation: annotation
      });
    }), !props.disableEditor && props.value && props.value.selection && props.value.selection.showEditor && renderEditor({
      annotation: props.value,
      onChange: props.onChange,
      onSubmit: this.onSubmit
    }), /*#__PURE__*/_react["default"].createElement("div", null, props.children));
  };
  return Annotation;
}(_react.Component), _defineProperty(_class, "propTypes", {
  innerRef: _propTypes["default"].func,
  onMouseUp: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].object,
  annotations: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].string
  })).isRequired,
  type: _propTypes["default"].string,
  selectors: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    TYPE: _propTypes["default"].string,
    intersects: _propTypes["default"].func.isRequired,
    area: _propTypes["default"].func.isRequired,
    methods: _propTypes["default"].object.isRequired
  })).isRequired,
  value: _propTypes["default"].shape({
    selection: _propTypes["default"].object,
    geometry: _propTypes["default"].shape({
      type: _propTypes["default"].string.isRequired
    }),
    data: _propTypes["default"].object
  }),
  onChange: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  activeAnnotationComparator: _propTypes["default"].func,
  activeAnnotations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disableAnnotation: _propTypes["default"].bool,
  disableSelector: _propTypes["default"].bool,
  renderSelector: _propTypes["default"].func,
  disableEditor: _propTypes["default"].bool,
  renderEditor: _propTypes["default"].func,
  renderHighlight: _propTypes["default"].func.isRequired,
  renderContent: _propTypes["default"].func.isRequired,
  disableOverlay: _propTypes["default"].bool,
  renderOverlay: _propTypes["default"].func.isRequired,
  allowTouch: _propTypes["default"].bool
}), _defineProperty(_class, "defaultProps", _defaultProps["default"]), _class));
module.exports = exports.default;