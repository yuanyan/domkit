'use strict';

var insertRule = require('./insertRule');
var vendorPrefix = require('./getVendorPrefix')();
var index = 0;

module.exports = function(keyframes) {
  // random name
  var name = 'anim_' + (++index) + (+new Date);
  // The @-ms-keyframes prefix does not exist and will break for IE9
  var vendorPrefixExceptMs = vendorPrefix === "-ms-" ? "" : vendorPrefix;
  var css = "@" + vendorPrefixExceptMs + "keyframes " + name + " {";

  for (var key in keyframes) {
    css += key + " {";

    for (var property in keyframes[key]) {
      var part = ":" + keyframes[key][property] + ";";
      // We do vendor prefix for every property
      css += vendorPrefix + property + part;
      css += property + part;
    }

    css += "}";
  }

  css += "}";

  insertRule(css);

  return name
}
