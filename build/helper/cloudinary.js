'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cloud = _cloudinary2.default.v2;

cloud.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

exports.default = cloud;
//# sourceMappingURL=cloudinary.js.map