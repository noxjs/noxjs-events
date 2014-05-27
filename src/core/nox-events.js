/**
* Events module for Nox.js
*
* @module events
*/

Nox.module('events', function(box) {
  'use strict';

  var Events;

  box.events = function(el) {
    return new Events(el);
  };

  Events = function(el) {
    this.elements = document.querySelectorAll(el);
  };

  Events.prototype.on = function(action, callback) {
    console.log(this.elements);
    console.log(action, callback);
  };
});
