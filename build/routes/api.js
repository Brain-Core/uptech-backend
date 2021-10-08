'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = require('express').Router();

var About = require('../models/about.model');

var _require = require('../helper/helper'),
    upload = _require.upload;

//  ############ API TEST ###################

// test routes


router.get('/testAPI', function (req, res) {
    res.json('UP-Tech API works perfectly ...');
});

//  ############ ABOUT ###################

// save the about
router.post('/about', upload.single('photo'), function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var newAbout, saveAbout;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        newAbout = new about({ text: req.text });
                        _context.next = 4;
                        return newAbout.save();

                    case 4:
                        saveAbout = _context.sent;
                        return _context.abrupt('return', res.json(saveAbout));

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', res.json({ errorMessage: _context.t0 }));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

// get the about
router.get('/about/:id', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _about;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return About.findById(req.params.id);

                    case 3:
                        _about = _context2.sent;
                        return _context2.abrupt('return', res.json(_about));

                    case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2['catch'](0);
                        return _context2.abrupt('return', res.json({ errorMessage: _context2.t0 }));

                    case 10:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

// update the about
router.put('/about/:id', function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var newAboutData, aboutUpdated;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        newAboutData = { text: req.text };
                        aboutUpdated = About.findByIdAndUpdate({ _id: req.params.id }, newAboutData, { new: true });
                        return _context3.abrupt('return', res.json(aboutUpdated));

                    case 6:
                        _context3.prev = 6;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.json({ errorMessage: _context3.t0 }));

                    case 9:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 6]]);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}());

//  ############ TEAM ###################


module.exports = router;
//# sourceMappingURL=api.js.map