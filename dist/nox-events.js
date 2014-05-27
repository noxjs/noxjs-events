/** noxjs-events - v0.0.0 - 2014-05-27
* Copyright (c) 2014 Mauricio Soares de Oliveira;
* Licensed MIT 
*/

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
