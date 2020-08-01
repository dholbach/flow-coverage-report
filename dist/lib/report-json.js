'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _promisified = require('./promisified');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveFlowCoverageReportJSON(coverageSummaryData, opts) {
  var projectDir = opts.projectDir;
  var outputDir = opts.outputDir || _path2.default.join(projectDir, 'flow-coverage');

  coverageSummaryData.globIncludePatterns = opts.globIncludePatterns;

  return (0, _mkdirp2.default)(outputDir).then(function () {
    return (0, _promisified.writeFile)(_path2.default.join(outputDir, 'flow-coverage.json'), Buffer.from(JSON.stringify(coverageSummaryData)));
  }).then(function () {
    return [coverageSummaryData, opts];
  });
}exports.default = {
  generate: saveFlowCoverageReportJSON
};
//# sourceMappingURL=report-json.js.map