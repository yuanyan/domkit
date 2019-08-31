'use strict';

var getVendorPropertyName = require('./getVendorPropertyName');

module.exports = function (target, sources) {
  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    for (var i in from) {
      if (hasOwnProperty.call(from, i)) {
        to[i] = from[i];
      }
    }
  }

  var prefixed = {};
  for (var k in to) {
    prefixed[getVendorPropertyName(k)] = to[k];
  }

  return prefixed;
};
