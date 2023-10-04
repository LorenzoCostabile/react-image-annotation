"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Point = _interopRequireDefault(require("./Point"));
var _Editor = _interopRequireDefault(require("./Editor"));
var _FancyRectangle = _interopRequireDefault(require("./FancyRectangle"));
var _Rectangle = _interopRequireDefault(require("./Rectangle"));
var _Oval = _interopRequireDefault(require("./Oval"));
var _Content = _interopRequireDefault(require("./Content"));
var _Overlay = _interopRequireDefault(require("./Overlay"));
var _selectors = require("../selectors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  innerRef: function innerRef() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  type: _selectors.RectangleSelector.TYPE,
  selectors: [_selectors.RectangleSelector, _selectors.PointSelector, _selectors.OvalSelector],
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  disableOverlay: false,
  activeAnnotationComparator: function activeAnnotationComparator(a, b) {
    return a === b;
  },
  renderSelector: function renderSelector(_ref) {
    var annotation = _ref.annotation;
    switch (annotation.geometry.type) {
      case _selectors.RectangleSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_FancyRectangle["default"], {
          annotation: annotation
        });
      case _selectors.PointSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Point["default"], {
          annotation: annotation
        });
      case _selectors.OvalSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Oval["default"], {
          annotation: annotation
        });
      default:
        return null;
    }
  },
  renderEditor: function renderEditor(_ref2) {
    var annotation = _ref2.annotation,
      onChange = _ref2.onChange,
      onSubmit = _ref2.onSubmit;
    return /*#__PURE__*/_react["default"].createElement(_Editor["default"], {
      annotation: annotation,
      onChange: onChange,
      onSubmit: onSubmit
    });
  },
  renderHighlight: function renderHighlight(_ref3) {
    var key = _ref3.key,
      annotation = _ref3.annotation,
      active = _ref3.active;
    switch (annotation.geometry.type) {
      case _selectors.RectangleSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Rectangle["default"], {
          key: key,
          annotation: annotation,
          active: active
        });
      case _selectors.PointSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Point["default"], {
          key: key,
          annotation: annotation,
          active: active
        });
      case _selectors.OvalSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Oval["default"], {
          key: key,
          annotation: annotation,
          active: active
        });
      default:
        return null;
    }
  },
  renderContent: function renderContent(_ref4) {
    var key = _ref4.key,
      annotation = _ref4.annotation;
    return /*#__PURE__*/_react["default"].createElement(_Content["default"], {
      key: key,
      annotation: annotation
    });
  },
  renderOverlay: function renderOverlay(_ref5) {
    var type = _ref5.type,
      annotation = _ref5.annotation;
    switch (type) {
      case _selectors.PointSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], null, "Click to Annotate");
      default:
        return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], null, "Click and Drag to Annotate");
    }
  }
};
module.exports = exports.default;