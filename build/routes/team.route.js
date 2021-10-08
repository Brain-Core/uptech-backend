'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _team = require('../controller/team.controller');

var _team2 = _interopRequireDefault(_team);

var _express = require('express');

var _helper = require('../helper/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (0, _express.Router)();

// router /teams
// @desc get
// @access public
route.get('/', _team2.default.getTeamMember);

// router /teams/:id
// @desc get
// @access public
route.get('/:id', _team2.default.getOneTeamMember);

// router /teams/post
// @desc post
// @access public
route.post('/post', _helper.upload.single('avatar'), _team2.default.insertTeamMembers);

// router /teams/edit/:id
// @desc put
// @access public
route.put('/edit/:id', _helper.upload.single('avatar'), _team2.default.updateTeamMember);

// router /teams/delete/:id
// @desc delete
// @access public

route.delete('/delete/:id', _helper.upload.single('avatar'), _team2.default.deleteTeamMember);

exports.default = route;
//# sourceMappingURL=team.route.js.map