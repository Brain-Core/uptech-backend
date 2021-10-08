'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _partner = require('../models/partner.model');

var _partner2 = _interopRequireDefault(_partner);

var _cloudinary = require('../helper/cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// """""""""" insert partners """"""""""""""
var insertPartners = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var result, name;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _cloudinary2.default.uploader.upload(req.file.path);

                    case 2:
                        result = _context.sent;
                        name = req.body.name;
                        _context.prev = 4;
                        _context.next = 7;
                        return _partner2.default.findOne({ name: name }).then(function (partner) {
                            if (partner) {
                                return res.json({ msg: 'partner already exists' });
                            } else {
                                var newPartner = new _partner2.default({
                                    name: name,
                                    logo: result.secure_url,
                                    cloud: result.public_id
                                });

                                var savePartner = newPartner.save();
                                return res.json(savePartner);
                            }
                        });

                    case 7:
                        _context.next = 12;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](4);
                        return _context.abrupt('return', res.json({ errorMessage: _context.t0 }));

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[4, 9]]);
    }));

    return function insertPartners(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// """""""""" list all partners """"""""""""""

var getPartners = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var partners, returnPartner, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _partner2.default.find();

                    case 3:
                        partners = _context2.sent;
                        returnPartner = [];

                        for (i = 0; i < partners.length; i++) {
                            returnPartner.push(partners[i].transform());
                        }
                        return _context2.abrupt('return', res.json(returnPartner));

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](0);
                        return _context2.abrupt('return', res.json({ errorMessage: _context2.t0 }));

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 9]]);
    }));

    return function getPartners(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// """""""""" list one  partner """"""""""""""
var getOnePartner = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var partner;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _partner2.default.findById(req.params.id);

                    case 3:
                        partner = _context3.sent;
                        return _context3.abrupt('return', res.json(partner));

                    case 7:
                        _context3.prev = 7;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.json({ errorMessage: _context3.t0 }));

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 7]]);
    }));

    return function getOnePartner(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

// """""""""" delete partner """"""""""""""

var deleteOnePartner = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var partnerUpdated;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _partner2.default.findByIdAndDelete({ _id: req.params.id });

                    case 3:
                        partnerUpdated = _context4.sent;
                        return _context4.abrupt('return', res.json(partnerUpdated));

                    case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4['catch'](0);
                        return _context4.abrupt('return', res.json({ errorMessage: _context4.t0 }));

                    case 10:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 7]]);
    }));

    return function deleteOnePartner(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

// """""""""" update one partner by his id""""""""""""""

var updateOnePartner = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var name, image, result, newPartnerData, partnerUpdated;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        name = req.body.name;
                        image = req.file.path;

                        console.log(name, " - ", image);
                        _context5.next = 5;
                        return _cloudinary2.default.uploader.upload(image);

                    case 5:
                        result = _context5.sent;
                        _context5.prev = 6;
                        newPartnerData = {
                            name: name,
                            logo: result.secure_url
                        };
                        _context5.next = 10;
                        return _partner2.default.findByIdAndUpdate({ _id: req.params.id }, newPartnerData, { new: true });

                    case 10:
                        partnerUpdated = _context5.sent;
                        return _context5.abrupt('return', res.json(partnerUpdated));

                    case 14:
                        _context5.prev = 14;
                        _context5.t0 = _context5['catch'](6);
                        return _context5.abrupt('return', res.json({ errorMessage: _context5.t0 }));

                    case 17:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined, [[6, 14]]);
    }));

    return function updateOnePartner(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

exports.default = {
    insertPartners: insertPartners,
    deleteOnePartner: deleteOnePartner,
    getOnePartner: getOnePartner,
    getPartners: getPartners,
    updateOnePartner: updateOnePartner
};
//# sourceMappingURL=partner.controller.js.map