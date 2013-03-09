/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/

( function( window ) {

'use strict';

var EventEmitter = window.EventEmitter;
var eventie = window.eventie;

var document = window.document;

function docReady( fn ) {
  if ( docReady.isReady ) {
    fn();
  } else {
    docReady.on( 'ready', fn );
  }
}

docReady.isReady = false;

for ( var prop in EventEmitter.prototype ) {
  docReady[ prop ] = EventEmitter.prototype[ prop ];
}

// triggered on various doc ready events
function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }
  docReady.isReady = true;
  docReady.emit( 'ready', event );
}

eventie.bind( document, 'DOMContentLoaded', init );
eventie.bind( document, 'readystatechange', init );
eventie.bind( window, 'load', init );

// transport
window.docReady = docReady;

})( this );
