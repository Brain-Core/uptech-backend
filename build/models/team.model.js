'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbconnect = require('../helper/dbconnect');

var _dbconnect2 = _interopRequireDefault(_dbconnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeamSchema = _dbconnect2.default.Schema({
    completeName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    cloudi_id: {
        type: String
    }
});

TeamSchema.method('transform', function () {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

exports.default = _dbconnect2.default.model('teams', TeamSchema);
//# sourceMappingURL=team.model.js.map