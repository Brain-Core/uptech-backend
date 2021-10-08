'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbconnect = require('../helper/dbconnect');

var _dbconnect2 = _interopRequireDefault(_dbconnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductSchema = _dbconnect2.default.Schema({
    namep: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    cloudinary_id: {
        type: String
    }
});

ProductSchema.method('transform', function () {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

exports.default = _dbconnect2.default.model('products', ProductSchema);
//# sourceMappingURL=product.model.js.map