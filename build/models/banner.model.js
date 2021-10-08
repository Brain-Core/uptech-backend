'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbconnect = require('../helper/dbconnect');

var _dbconnect2 = _interopRequireDefault(_dbconnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BannerSchema = _dbconnect2.default.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cloud_id: {
        type: String
    }
});

exports.default = _dbconnect2.default.model('banner', BannerSchema);
//# sourceMappingURL=banner.model.js.map