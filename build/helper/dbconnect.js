"use strict";

var _mongoose = require("mongoose");




_mongoose.connect(process.env.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(function () {
    return console.log('connect with success');
}).catch(function (err) {
    return console.log(err);
});

exports.default = _mongoose;
//# sourceMappingURL=dbconnect.js.map