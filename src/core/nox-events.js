/**
* Events module for Nox.js
*
* @module events
*/

Nox.module('events', function(box) {
  'use strict';

  var events,
    scope = {};

  events = box.events = function(el) {
    console.log(this);
    return box.events.prototype;
  };

  events.prototype.on = function(action, callback) {
    console.log(action, callback);
  };
});
