'use strict';

var builtinStyle = require('./builtinStyle');
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
var domVendorPrefix;

// 2009 spec only
var flexbox = {
  flex: ['WebkitFlex', 'WebkitBoxFlex'],
  order: ['WebkitOrder','WebkitBoxOrdinalGroup'],
  // https://github.com/postcss/autoprefixer/blob/master/lib/hacks/flex-direction.coffee
  flexDirection: ['WebkitFlexDirection', 'WebkitBoxOrient', 'WebkitBoxDirection'],
  // https://github.com/postcss/autoprefixer/blob/master/lib/hacks/align-items.coffee
  alignItems: ['WebkitAlignItems', 'WebkitBoxAlign'],
  // https://github.com/postcss/autoprefixer/blob/master/lib/hacks/justify-content.coffee
  justifyContent: ['WebkitJustifyContent', 'WebkitBoxPack'],
  flexWrap: ['WebkitFlexWrap'],
  alignSelf: ['WebkitAlignSelf'],
}

// Helper function to get the proper vendor property name. (transition => WebkitTransition)
module.exports = function(prop, isSupportTest) {

  var vendorProp;
  if (prop in builtinStyle) return prop;

  if(flexbox[prop]){
    // TODO: cache the result
    var flexProperties = flexbox[prop];
    for (var i = 0; i < flexProperties.length; ++i) {
      if (flexProperties[i] in builtinStyle) {
        return flexProperties[i];
      }
    }

  }else{

    var UpperProp = prop.charAt(0).toUpperCase() + prop.substr(1);

    if (domVendorPrefix) {

      vendorProp = domVendorPrefix + UpperProp;
      if (vendorProp in builtinStyle) {
        return vendorProp;
      }
    } else {

      for (var i = 0; i < prefixes.length; ++i) {
        vendorProp = prefixes[i] + UpperProp;
        if (vendorProp in builtinStyle) {
          domVendorPrefix = prefixes[i];
          return vendorProp;
        }
      }
    }
  }

  // if support test, not fallback to origin prop name
  if (!isSupportTest) {
    return prop;
  }

}
