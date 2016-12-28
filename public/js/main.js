(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./menu.js');

},{"./menu.js":2}],2:[function(require,module,exports){
((window) => {
  'use strict';

  /*
   *  Menu Constructor
   */
  function Menu() {
    this._init();
  }  

  /*
   * Initialize Menu
   */
  Menu.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector('#main-container');
    this.mask = document.querySelector('#menu-mask');
    this.menu = document.querySelector('.menu-mobile');
    this.toggleBtn = document.querySelector('.menu-toggle');

    this._initEvents();
  }

  /*
   * Initialize menu events
   */
  Menu.prototype._initEvents = function() {
    this.toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clicked');
      this._toggle();
    })
  }

  /*
   * Toggle Menu
   */
  Menu.prototype._toggle = function() {
    this.menu.classList.toggle('active');
    this.mask.classList.toggle('active');
    this.body.classList.toggle('has-active-menu');
    this.toggleBtn.classList.toggle('active');
  }

  window.Menu = Menu;
})(window);


const menu = new Menu();

},{}]},{},[1]);
