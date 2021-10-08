'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = require('../controller/product.controller');

var _product2 = _interopRequireDefault(_product);

var _express = require('express');

var _helper = require('../helper/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (0, _express.Router)();

// get one product 
// request: /products
route.get('/', _product2.default.getProducts);

// get one product 
// request: /products/:id
route.get('/:id', _product2.default.getOneProduct);

// get one product 
// request: /products/post
route.post('/post', _helper.upload.single('photo'), _product2.default.insertProduct);

// get one product 
// request: /products/edit/:id
route.put('/edit/:id', _helper.upload.single('photo'), _product2.default.updateProduct);

// get one product 
// request: /products/delete/:id
route.delete('/delete/:id', _product2.default.deleteOneProduct);

exports.default = route;
//# sourceMappingURL=product.route.js.map