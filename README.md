# React Kit
> Toolkit for React

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

## addClass

```js
var addClass = require('react-kit/addClass');
addClass(this.getDOMNode(), 'foo');
```

## removeClass

```js
var removeClass = require('react-kit/removeClass');
removeClass(this.getDOMNode(), 'foo');
```

## hasClass

```js
var hasClass = require('react-kit/hasClass');
hasClass(this.getDOMNode(), 'foo'); // => true
```

## transitionEventsa

```js
var transitionEvents = require('react-kit/transitionEvents');
transitionEvents.addEndEventListener(node, eventListener);
transitionEvents.removeEndEventListener(node, eventListener);
```

## classNames

```js
var classNames = require('react-kit/classNames');

classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }) // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// Arrays will be recursively flattened as per the rules above:
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

## canUseDOM

```js
var canUseDOM = require('react-kit/canUseDOM');
if(canUseDOM){
  // balabala
}
```

## addEventListener

```js
var addEventListener = require('react-kit/addEventListener');
addEventListener(window, 'scroll', handle)
```

## removeEventListener
```js
var removeEventListener = require('react-kit/removeEventListener');
removeEventListener(window, 'scroll', handle)
```

## throttle
```js
var throttle = require('react-kit/throttle');
throttle(fn, 100)
```

## onEndTransition
```js
var onEndTransition = require('react-kit/onEndTransition');
onEndTransition(el, handle)
```

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 6+ ✔ | Chrome 4.0+ ✔ | Firefox 16.0+ ✔ | Opera 15.0+ ✔ | Safari 4.0+ ✔ |
