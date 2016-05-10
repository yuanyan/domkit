'use strict';

var canUseDOM = require('./canUseDOM');

module.exports = canUseDOM && document.createElement('div').style;
