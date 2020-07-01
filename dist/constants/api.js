"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rootPath = 'https://cnodejs.org/api/v1';
var apiObject = {
  gettopics: "https://cnodejs.org/api/v1/topics", //获取话题列表
  gettopicinfo: "https://cnodejs.org/api/v1/topic", //获取话题列表
  checkusertoken: "https://cnodejs.org/api/v1/accesstoken", //验证 accessToken 的正确性
  getuserinfo: "https://cnodejs.org/api/v1/user/", //获取用户详情
  createtopic: "https://cnodejs.org/api/v1/topics", //新建话题
  replytopic: "https://cnodejs.org/api/v1/topic/", //回复话题信息
  upreply: "https://cnodejs.org/api/v1/reply/", //点赞
  updatetopic: "https://cnodejs.org/api/v1/topics/update" //更新主题
};
exports.default = apiObject;