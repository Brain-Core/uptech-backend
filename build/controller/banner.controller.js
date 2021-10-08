'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var insertBanner = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var name, url_image, result, new_banner, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        name = req.body.name;
                        url_image = req.file.path;
                        _context.next = 4;
                        return _cloudinary2.default.uploader.upload(url_image);

                    case 4:
                        result = _context.sent;
                        new_banner = new _banner2.default({
                            name: name,
                            image: result.secure_url,
                            cloud_id: result.public_id
                        });
                        _context.next = 8;
                        return new_banner.save();

                    case 8:
                        response = _context.sent;
                        return _context.abrupt('return', res.json(response));

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function insertBanner(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var getAllBanner = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _banner2.default.find();

                    case 2:
                        result = _context2.sent;
                        return _context2.abrupt('return', res.json(result));

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getAllBanner(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _banner = require('../models/banner.model');

var _banner2 = _interopRequireDefault(_banner);

var _cloudinary = require('../helper/cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    insertBanner: insertBanner,
    getAllBanner: getAllBanner
};
//# sourceMappingURL=banner.controller.js.map