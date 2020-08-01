'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlowCoverageMeterBar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlowCoverageMeterBar(props) {
  var threshold = props.threshold,
      thresholdUncovered = props.thresholdUncovered,
      uncoveredCount = props.uncoveredCount,
      percent = props.percent;


  var color = void 0;
  if (thresholdUncovered) {
    color = uncoveredCount <= thresholdUncovered ? 'green' : 'red';
  } else {
    color = percent >= threshold ? 'green' : 'red';
  }

  var style = {
    padding: 0, height: 12
  };
  return _react2.default.createElement('div', { className: 'row ' + color, style: style });
}
//# sourceMappingURL=coverage-meter-bar.js.map