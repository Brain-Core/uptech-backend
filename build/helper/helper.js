'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = undefined;

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer2.default)({
  storage: _multer2.default.diskStorage({}),
  fileFilter: function fileFilter(req, file, cb) {
    var ext = _path2.default.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  }
});

exports.upload = upload;
//# sourceMappingURL=helper.js.map