"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _user = require("../../actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_dec = (0, _index3.connect)(function (store) {
  return _extends({}, store.user);
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__3", "$compid__4", "$compid__5", "recent_topics", "recent_replies", "loginname", "avatar_url"], _this.state = {
      recent_topics: [],
      recent_replies: []
    }, _this.customComponents = ["Head", "Panel"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      (0, _user.getUserInfo)({ loginname: this.props.loginname }).then(function (result) {
        _this2.setState({
          recent_topics: result.data.recent_topics,
          recent_replies: result.data.recent_replies
        });
      });
    }
    //发布话题 跳转到发布话题页面

  }, {
    key: "publishTopic",
    value: function publishTopic() {
      _index2.default.redirectTo({ url: '/pages/publish/publish' });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__3 = (0, _index.genCompid)(__prefix + "$compid__3");
      var $compid__4 = (0, _index.genCompid)(__prefix + "$compid__4");
      var $compid__5 = (0, _index.genCompid)(__prefix + "$compid__5");

      var _props = this.__props,
          loginname = _props.loginname,
          avatar_url = _props.avatar_url;
      var _state = this.__state,
          recent_topics = _state.recent_topics,
          recent_replies = _state.recent_replies;

      _index.propsManager.set({
        "loginname": loginname,
        "avatar_url": avatar_url
      }, $compid__3);
      _index.propsManager.set({
        "listData": recent_topics,
        "title": "\u6700\u8FD1\u53D1\u5E03\u7684\u8BDD\u9898"
      }, $compid__4);
      _index.propsManager.set({
        "listData": recent_replies,
        "title": "\u6700\u8FD1\u6536\u5230\u7684\u56DE\u590D"
      }, $compid__5);
      Object.assign(this.__state, {
        $compid__3: $compid__3,
        $compid__4: $compid__4,
        $compid__5: $compid__5
      });
      return this.__state;
    }
  }]);

  return User;
}(_index.Component), _class2.$$events = ["publishTopic"], _class2.$$componentPath = "pages/user/user", _temp2)) || _class);
exports.default = User;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(User, true));