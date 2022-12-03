"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task");
var router = (0, _express.Router)();
router.get('/users/:user/:pass/auth', _task.authUser);
var _default = router;
exports["default"] = _default;