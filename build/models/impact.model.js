'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbconnect = require('../helper/dbconnect');

var _dbconnect2 = _interopRequireDefault(_dbconnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImpactSchema = _dbconnect2.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    cloud_id: {
        type: String
    }
});

ImpactSchema.method('transform', function () {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

exports.default = _dbconnect2.default.model('impacts', ImpactSchema);
//# sourceMappingURL=impact.model.js.map