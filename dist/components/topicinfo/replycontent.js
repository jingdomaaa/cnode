"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReplyContent = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ReplyContent, _BaseComponent);

  function ReplyContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReplyContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReplyContent.__proto__ || Object.getPrototypeOf(ReplyContent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReplyContent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ReplyContent.prototype.__proto__ || Object.getPrototypeOf(ReplyContent.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "btnOK",
    value: function btnOK() {
      if (this.state.value) {
        var value = this.state.value;
        this.props.onOKReplyContent && this.props.onOKReplyContent(value);
      } else {
        _index2.default.showToast({ title: '请输入评论内容', icon: 'none' });
      }
    }
  }, {
    key: "btnCancel",
    value: function btnCancel() {
      this.props.onCancelReplyContent && this.props.onCancelReplyContent();
    }
  }, {
    key: "changeContent",
    value: function changeContent(event) {
      if (event && event.target) {
        this.setState({ value: event.target.value });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return ReplyContent;
}(_index.Component), _class.$$events = ["changeContent", "btnOK", "btnCancel"], _class.$$componentPath = "components/topicinfo/replycontent", _temp2);
exports.default = ReplyContent;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ReplyContent));