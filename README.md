## No longer supported

Use [`DOMContentLoaded` event](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) instead. Supported by IE9+.

``` js
document.addEventListener( 'DOMContentLoaded', function( event ) {
  console.log("DOM is ready. Let's party");
});
```

# docReady

Cross browser document ready helper. Supported by IE8+ and good browsers.

```js
docReady( function() {
  console.log("DOM is ready. Let's party");
});
```

Props to [dperini/ContentLoaded](https://github.com/dperini/ContentLoaded) for original code

## Install

Install with [Bower](http://bower.io) `bower install doc-ready`

Install with npm `npm install doc-ready`

## MIT License

docReady is released under the [MIT license](http://desandro.mit-license.org).
