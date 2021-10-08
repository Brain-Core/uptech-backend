'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// ###### insert product in the database controller

var insertProduct = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var namep, image, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        namep = req.body.namep;
                        image = req.file.path;
                        _context.next = 4;
                        return _cloudinary2.default.uploader.upload(image);

                    case 4:
                        result = _context.sent;


                        _product2.default.findOne({ namep: namep }).then(function (product) {
                            if (product) {
                                return res.json({ msg: 'product already exists !!!!!' });
                            } else {

                                var newProduct = new _product2.default({
                                    namep: namep,
                                    photo: result.secure_url,
                                    cloudinary_id: result.public_id
                                });

                                newProduct.save().then(function (product) {
                                    res.json(product);
                                });
                            }
                        }).catch(function (err) {
                            return res.json({ err: err });
                        });

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function insertProduct(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// ############# get all products ######################


var _product = require('../models/product.model');

var _product2 = _interopRequireDefault(_product);

var _cloudinary = require('../helper/cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getProducts = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var products, returnProduct, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _product2.default.find();

                    case 3:
                        products = _context2.sent;
                        returnProduct = [];

                        for (i = 0; i < products.length; i++) {
                            returnProduct.push(products[i].transform());
                        }
                        return _context2.abrupt('return', res.json(returnProduct));

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

    return function getProducts(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// ############## get one single product by its id ###################

var getOneProduct = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var product;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _product2.default.findById(req.params.id);

                    case 3:
                        product = _context3.sent;
                        return _context3.abrupt('return', res.json(product));

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

    return function getOneProduct(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

// ############## edit one single product by its id #######

var updateProduct = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var name, image, result, newProductData, productUpdated;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        name = req.body.namep;
                        image = req.file.path;
                        _context4.next = 5;
                        return _cloudinary2.default.uploader.upload(image);

                    case 5:
                        result = _context4.sent;
                        newProductData = {
                            name: name,
                            photo: result.secure_url
                        };
                        _context4.next = 9;
                        return _product2.default.findByIdAndUpdate({ _id: req.params.id }, newProductData, { new: true });

                    case 9:
                        productUpdated = _context4.sent;
                        return _context4.abrupt('return', res.json(productUpdated));

                    case 13:
                        _context4.prev = 13;
                        _context4.t0 = _context4['catch'](0);
                        return _context4.abrupt('return', res.json({ errorMessage: _context4.t0 }));

                    case 16:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 13]]);
    }));

    return function updateProduct(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

//##### delete a single product by its id ######

var deleteOneProduct = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var productUpdated;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return _product2.default.findOneAndDelete({ _id: req.params.id });

                    case 3:
                        productUpdated = _context5.sent;
                        return _context5.abrupt('return', res.json(productUpdated));

                    case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5['catch'](0);
                        return _context5.abrupt('return', res.json({ errorMessage: _context5.t0 }));

                    case 10:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined, [[0, 7]]);
    }));

    return function deleteOneProduct(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

exports.default = {
    insertProduct: insertProduct,
    getOneProduct: getOneProduct,
    getProducts: getProducts,
    updateProduct: updateProduct,
    deleteOneProduct: deleteOneProduct
};
//# sourceMappingURL=product.controller.js.map