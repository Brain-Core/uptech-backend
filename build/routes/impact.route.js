"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _impact = require("../controller/impact.controller");

var _impact2 = _interopRequireDefault(_impact);

var _helper = require("../helper/helper");

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (0, _express.Router)();

// get one impacts 
// request: /impacts
route.get('/', _impact2.default.getImpact);

// get one partner 
// request: /impact/:id
route.get('/:id', _impact2.default.getOneImpact);

// insert one partner 
// request: /impact/post
route.post('/post', _helper.upload.single('photo'), _impact2.default.insertImpact);

// update one impact 
// request: /impact/edit/:id

route.put('/put/:id', _helper.upload.single('photo'), _impact2.default.updateImpact);

// delete one impact
// request: /impacts/delete/:id

route.delete('/delete/:id', _impact2.default.deleteImpact);

exports.default = route;
//# sourceMappingURL=impact.route.js.map