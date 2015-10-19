'use strict';

var builtinStyle = document.createElement('div').style;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
var domVendorPrefix;

// Helper function to get the proper vendor property name. (transition => WebkitTransition)
module.exports = function(prop) {
  var vendorProp;
  if (prop in builtinStyle) return prop;
  var UpperProp = prop.charAt(0).toUpperCase() + prop.substr(1);

  if (domVendorPrefix) {
    vendorProp = domVendorPrefix + UpperProp;
    if (vendorProp in builtinStyle) {
      return vendorProp;
    }else{
      return prop;
    }

  } else {

    for (var i = 0; i < prefixes.length; ++i) {
      vendorProp = prefixes[i] + UpperProp;
      if (vendorProp in builtinStyle) {
        domVendorPrefix = prefixes[i];
        return vendorProp;
      }
    }

    if(!domVendorPrefix) {
      return prop;
    }
  }
}
