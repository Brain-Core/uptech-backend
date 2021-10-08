'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _team = require('../models/team.model');

var _team2 = _interopRequireDefault(_team);

var _cloudinary = require('../helper/cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// get all team members 
var getTeamMember = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _team2.default.find().then(function (teams) {
                            var returnTeam = [];
                            for (var i = 0; i < teams.length; i++) {
                                returnTeam.push(teams[i].transform());
                            }
                            res.json(returnTeam);
                        }).catch(function (err) {
                            return res.json({ MsgError: err });
                        });

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getTeamMember(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// get one team member

var getOneTeamMember = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        id = req.params.id;
                        _context2.next = 3;
                        return _team2.default.findById(id).then(function (team) {
                            return res.json(team);
                        }).catch(function (err) {
                            return res.json({ MsgError: err });
                        });

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getOneTeamMember(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// ++++++++++++++++++++ register team member in the database ++++++++++++++++++++++
var insertTeamMembers = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$body, completeName, address, email, phone, position, url, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _req$body = req.body, completeName = _req$body.completeName, address = _req$body.address, email = _req$body.email, phone = _req$body.phone, position = _req$body.position;
                        url = req.file.path;
                        _context3.next = 4;
                        return _cloudinary2.default.uploader.upload(url);

                    case 4:
                        result = _context3.sent;

                        if (!(!completeName || !address || !email || !phone || !position || !url)) {
                            _context3.next = 7;
                            break;
                        }

                        return _context3.abrupt('return', res.status(501).json({
                            Warning: 'All fields must be fill'
                        }));

                    case 7:
                        _team2.default.findOne({ completeName: completeName }).then(function (team) {
                            // check if the member is not exists yet, to not register him twice
                            if (team) {
                                return res.json({ msg: 'team member already exists' });
                            } else {
                                var newTeam = new _team2.default({
                                    completeName: completeName,
                                    address: address,
                                    email: email,
                                    phone: phone,
                                    position: position,
                                    avatar: result.secure_url,
                                    cloudi_id: result.public_id
                                });
                                newTeam.save().then(function (team) {
                                    return res.json(team);
                                });
                            }
                        }).catch();

                    case 8:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function insertTeamMembers(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

// ++++++++++++++++++++ update one team member in the database ++++++++++++++++++++++
var updateTeamMember = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var _req$body2, completeName, address, email, phone, position, url, result, id, upfield, teamUpdate;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _req$body2 = req.body, completeName = _req$body2.completeName, address = _req$body2.address, email = _req$body2.email, phone = _req$body2.phone, position = _req$body2.position;
                        url = req.file.path;
                        _context4.next = 4;
                        return _cloudinary2.default.uploader.upload(url);

                    case 4:
                        result = _context4.sent;
                        id = req.params.id;
                        upfield = { completeName: completeName, address: address, email: email, phone: phone, position: position, avatar: result.secure_url };
                        _context4.next = 9;
                        return _team2.default.findByIdAndUpdate({ id: id }, upfield, { new: true });

                    case 9:
                        teamUpdate = _context4.sent;
                        return _context4.abrupt('return', res.json({
                            completeName: teamUpdate.completeName
                        }));

                    case 11:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function updateTeamMember(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

// ++++++++++++++++++++ delete team member in the database ++++++++++++++++++++++

var deleteTeamMember = function deleteTeamMember(req, res) {
    var id = req.params.id;
    _team2.default.findByIdAndDelete({ id: id }).then(function (team) {
        return res.json({
            team: {
                id: team.id,
                completeName: team.completeName
            }
        });
    }).catch(function (err) {
        return res.json({ MsgError: err });
    });
};

exports.default = {
    getTeamMember: getTeamMember,
    getOneTeamMember: getOneTeamMember,
    insertTeamMembers: insertTeamMembers,
    updateTeamMember: updateTeamMember,
    deleteTeamMember: deleteTeamMember
};
//# sourceMappingURL=team.controller.js.map