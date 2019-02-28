'use strict';

var cssVendorPrefix;
var canUseDOM = require('./canUseDOM');

module.exports = function() {

  if (!canUseDOM) return;

  if (cssVendorPrefix) return cssVendorPrefix;

  var styles = window.getComputedStyle(document.documentElement, '');
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];

  return cssVendorPrefix = '-' + pre + '-';
}
