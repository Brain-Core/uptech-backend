'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _impact = require('../models/impact.model');

var _impact2 = _interopRequireDefault(_impact);

var _cloudinary = require('../helper/cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// get impacts
var getImpact = function getImpact(req, res) {
    _impact2.default.find().then(function (impacts) {
        var returnImpact = [];
        for (var i = 0; i < impacts.length; i++) {
            returnImpact.push(impacts[i].transform());
        }

        res.json(returnImpact);
    }).catch(function (err) {
        return res.json({ errorMessage: error });
    });
};

// get a particular impact
var getOneImpact = function getOneImpact(req, res) {
    _impact2.default.findById(req.params.id).then(function (impacts) {
        return res.json(impacts);
    }).catch(function (err) {
        return res.json({ errorMessage: error });
    });
};

var insertImpact = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, title, description, p, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body = req.body, title = _req$body.title, description = _req$body.description;
                        p = req.file.path;
                        _context.next = 4;
                        return _cloudinary2.default.uploader.upload(p);

                    case 4:
                        result = _context.sent;

                        if (!(!title || !description || !p)) {
                            _context.next = 7;
                            break;
                        }

                        return _context.abrupt('return', res.status(501).json({ Warning: 'please fill all fields !!' }));

                    case 7:

                        _impact2.default.findOne({ title: title }).then(function (impact) {
                            if (impact) {
                                return res.status(501).json({ Warning: 'impact already exists' });
                            } else {
                                var newImpact = new _impact2.default({
                                    title: title,
                                    description: description,
                                    photo: result.secure_url,
                                    cloud_id: result.public_id
                                });
                                return newImpact.save().then(function (impact) {
                                    return res.json(impact);
                                }).catch(function (err) {
                                    return res.json(err);
                                });
                            }
                        });

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function insertImpact(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// update a impact
var updateImpact = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _req$body2, title, description, p, result, newImpactData, impactUpdated;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
                        p = req.file.path;
                        _context2.next = 4;
                        return _cloudinary2.default.uploader.upload(p);

                    case 4:
                        result = _context2.sent;
                        _context2.prev = 5;
                        newImpactData = {
                            title: title,
                            description: description,
                            photo: result.secure_url
                        };
                        impactUpdated = _impact2.default.findByIdAndUpdate({ _id: req.params.id }, newImpactData, { new: true });
                        return _context2.abrupt('return', res.json(impactUpdated));

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2['catch'](5);
                        return _context2.abrupt('return', res.json({ errorMessage: _context2.t0 }));

                    case 14:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[5, 11]]);
    }));

    return function updateImpact(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// delete one 
var deleteImpact = function deleteImpact(req, res) {
    var id = req.params.id;

    _impact2.default.findByIdAndDelete({ _id: id }).then(function (impact) {
        return res.json({ i: { id: impact.id } });
    }).catch(function (err) {
        return console.log(err);
    });
};

exports.default = {
    getImpact: getImpact,
    getOneImpact: getOneImpact,
    insertImpact: insertImpact,
    updateImpact: updateImpact,
    deleteImpact: deleteImpact
};
//# sourceMappingURL=impact.controller.js.map