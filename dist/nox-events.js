/** noxjs-events - v0.0.1 - 2014-05-27
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

  var Events,

  // used in loops
  i,

  // lenght of array
  length;

  box.events = function(el) {
    return new Events(el);
  };

  Events = function(el) {
    this.elements = [];
    if(el.nodeName || el.tagName) {
      this.elements.push(el);
    } else {
      this.elements = document.querySelectorAll(el);
    }
  };

  Events.fn = Events.prototype;

  Events.fn.on = function(action, callback) {
    if(this.elements.length) {
      for(i = 0, length = this.elements.length; i < length; i += 1) {

        Events.utils.addListener(this.elements[i], action, callback);
      }
    }
  };

  Events.fn.unbind = function(action, callback) {
    if(this.elements.length) {
      for(i = 0, length = this.elements.length; i < length; i += 1) {

        Events.utils.removeListener(this.elements[i], action, callback);
      }
    }
  };


  /**
  * Sniffing
  * this is a pattern for detecting compability in browsers
  * instead checking if the event is compatible with the
  * browser every time i try to use it, i just check it once
  * and attach it to a variable
  */
  Events.utils = {
    addListener: null,
    removeListener: null
  };

  if(typeof window.addEventListener === 'function') {
    // actually browsers
    Events.utils.addListener = function(el, type, fn) {
      el.addEventListener(type, fn, false);
    };

    Events.utils.removeListener = function(el, type, fn) {
      el.removeEventListener(type, fn, false);
    };

  } else if(typeof document.attachEvent === 'function') {
    // old IE
    Events.utils.addListener = function(el, type, fn) {
      el.attachEvent('on' + type, fn);
    };

    Events.utils.removeListener = function(el, type, fn) {
      el.detachEvent('on' + type, fn);
    };

  } else {
    // damn that's old
    Events.utils.addListener = function(el, type, fn) {
      el['on' + type] = fn;
    };

    Events.utils.removeListener = function(el, type, fn) {
      el['on' + type] = null;
    };
  }
});
