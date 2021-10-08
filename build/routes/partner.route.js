'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _partner = require('../controller/partner.controller');

var _partner2 = _interopRequireDefault(_partner);

var _express = require('express');

var _helper = require('../helper/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (0, _express.Router)();

// get one partners 
// request: /partners
route.get('/', _partner2.default.getPartners);

// get one partner 
// request: /partners/:id
route.get('/:id', _partner2.default.getOnePartner);

// insert one partner 
// request: /partners/post
route.post('/post', _helper.upload.single('logo'), _partner2.default.insertPartners);

// update one partners 
// request: /partners/edit/:id
route.put('/edit/:id', _helper.upload.single('logo'), _partner2.default.updateOnePartner);

// delete one partners 
// request: /partners/delete/:id
route.delete('/delete/:id', _partner2.default.deleteOnePartner);

exports.default = route;
//# sourceMappingURL=partner.route.js.map