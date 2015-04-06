'use strict';

var div = document.createElement('div');
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
var cssVendorPrefix;
var domVendorPrefix;

// Helper function to get the proper vendor property name. (transition => WebkitTransition)
function getVendorPropertyName(prop) {

   if (prop in div.style) return prop;

   var prop = prop.charAt(0).toUpperCase() + prop.substr(1);
   if(domVendorPrefix){
       return domVendorPrefix + prop;
   }else{
       for (var i=0; i<prefixes.length; ++i) {
           var vendorProp = prefixes[i] + prop;
           if (vendorProp in div.style) {
               domVendorPrefix = prefixes[i];
               return vendorProp;
           }
       }
   }
}

function getVendorPrefix(){

    if(cssVendorPrefix) return cssVendorPrefix;

    var styles = window.getComputedStyle(document.documentElement, '');
    var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1];

    return cssVendorPrefix = '-' + pre + '-';
}

function appendVendorPrefix(target, sources){
    var to = Object(target);
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
        var nextSource = arguments[nextIndex];
        if (nextSource == null) {
            continue;
        }

        var from = Object(nextSource);

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
    }

    var prefixed = {};
    for (var key in to) {
        prefixed[getVendorPropertyName(key)] = to[key]
    }

    return prefixed
}

module.exports = {
    getVendorPropertyName: getVendorPropertyName,
    getVendorPrefix: getVendorPrefix,
    appendVendorPrefix: appendVendorPrefix
};
