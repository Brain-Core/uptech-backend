'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _banner = require('../controller/banner.controller');

var _banner2 = _interopRequireDefault(_banner);

var _helper = require('../helper/helper');

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (0, _express.Router)();

route.get('/', _banner2.default.getAllBanner);

route.post('/', _helper.upload.single('image'), _banner2.default.insertBanner);

exports.default = route;
//# sourceMappingURL=banner.route.js.map