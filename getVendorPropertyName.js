'use strict';

var div = document.createElement('div');
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
var domVendorPrefix;

// Helper function to get the proper vendor property name. (transition => WebkitTransition)
module.exports = function (prop) {

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
