'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

require('dotenv').config();

var _product = require('./routes/product.route');



var _partner = require('./routes/partner.route');


var _team = require('./routes/team.route');



var _banner = require('./routes/banner.route');



var cors = require('cors');



var _impact = require('./routes/impact.route');


var _swagger = require('../swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _path = require('path');



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(cors());
app.use(_express.json());

//
if (process.env.NODE_ENV === 'production') {
    app.use(_express2.default.static(_path.join(__dirname, '../client/build')));

    app.get("/", function (req, res) {
        res.sendFile(_path.join.join(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.get('/', function (req, res) {
        res.send('Api running');
    });
}

// products endpoints
app.use('/products', _product);

// partners endpoints
app.use('/partners', _partner);

// team members endpoints
app.use('/teams', _team);

//impacts
app.use('/impacts', _impact);

//banner routes
app.use('/banner', _banner);

// docs 
app.use('/docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default));

var port = process.env.PORT || 3030;

app.listen(port, function () {
    return console.log('UP-Tech backend listening on ' + port);
});
//# sourceMappingURL=app.js.map