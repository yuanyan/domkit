# React Kit
> React.js Toolkit

## insertKeyframesRule

```js
var insertKeyframesRule = require('react-kit/insertKeyframesRule');
var keyframes = {
    '0%': {
        transform: 'scale(1)'
    },
    '50%': {
        transform: 'scale(0.5)',
        opacity: 0.7
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
};

var animationName = insertKeyframesRule(keyframes);
```

## insertRule

```js
var insertRule = require('react-kit/insertRule');
var css = '.foo {}'
insertRule(css);
```

## appendVendorPrefix

```js
var appendVendorPrefix = require('react-kit/appendVendorPrefix');
var style = {
    transform: 'scaleX(1)'
}
appendVendorPrefix(style);
```

## getVendorPrefix

```js
var getVendorPrefix = require('react-kit/getVendorPrefix');
var vendorPrefix = getVendorPrefix(); // => -webkit-
```
