'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

require('dotenv/config');

var _product = require('./routes/product.route');

var _product2 = _interopRequireDefault(_product);

var _partner = require('./routes/partner.route');

var _partner2 = _interopRequireDefault(_partner);

var _team = require('./routes/team.route');

var _team2 = _interopRequireDefault(_team);

var _banner = require('./routes/banner.route');

var _banner2 = _interopRequireDefault(_banner);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _impact = require('./routes/impact.route');

var _impact2 = _interopRequireDefault(_impact);

var _swagger = require('../swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());

//
if (process.env.NODE_ENV === 'production') {
    app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build')));

    app.get("/", function (req, res) {
        res.sendFile(_path2.default.join(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.get('/', function (req, res) {
        res.send('Api running');
    });
}

// products endpoints
app.use('/products', _product2.default);

// partners endpoints
app.use('/partners', _partner2.default);

// team members endpoints
app.use('/teams', _team2.default);

//impacts
app.use('/impacts', _impact2.default);

//banner routes
app.use('/banner', _banner2.default);

// docs 
app.use('/docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default));

var port = process.env.PORT || 3030;

app.listen(port, function () {
    return console.log('UP-Tech backend listening on ' + port);
});
//# sourceMappingURL=app.js.map