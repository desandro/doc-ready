/*!
 * docListener
 * Cross browser DOMContentLoaded event emitter
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/

( function( window ) {

'use strict';

var EventEmitter = window.EventEmitter;
var eventie = window.eventie;

var document = window.document;

var docListener = new EventEmitter();

var isDone = false;

function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( isDone || isIE8NotReady ) {
    return;
  }
  isDone = true;
  docListener.emit( 'ready', event );
}

eventie.bind( document, 'DOMContentLoaded', init );
eventie.bind( document, 'readystatechange', init );
eventie.bind( window, 'load', init );

// transport
window.docListener = docListener;

})( this );
