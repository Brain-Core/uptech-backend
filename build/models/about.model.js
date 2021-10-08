'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbconnect = require('../helper/dbconnect');

var _dbconnect2 = _interopRequireDefault(_dbconnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutSchema = _dbconnect2.default.Schema({
    text: {
        type: String,
        required: true
    }
});

exports.default = _dbconnect2.default.model('impacts', AboutSchema);
//# sourceMappingURL=about.model.js.map