(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./polyfills.js');
require('./menu.js');

},{"./menu.js":2,"./polyfills.js":3}],2:[function(require,module,exports){
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
    this.wrapper = document.querySelector('.nav-mobile');
    this.mask = document.querySelector('#menu-mask');
    this.menu = document.querySelector('.menu-mobile');
    this.toggleBtn = document.querySelector('.menu-toggle');
    this.lastScrollPosition = 0;

    this._initEvents();
  }

  /*
   * Initialize menu events
   */
  Menu.prototype._initEvents = function() {
    
    // menu toggle handler
    this.toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this._toggle();
    });

    // sticky menu handler
    window.addEventListener('scroll', (e) => {
      this._handlePageScroll();
    });
  }

  /*
   * Toggle Menu
   */
  Menu.prototype._toggle = function() {
    this.menu.classList.toggle('active');
    this.wrapper.classList.toggle('active');
    this.mask.classList.toggle('active');
    this.body.classList.toggle('has-active-menu');
    this.toggleBtn.classList.toggle('active');
  }

  /*
   * Toggle Navbar Anchor
   */
  Menu.prototype._handlePageScroll = function() {
    var currY = window.scrollY;
    var header = document.querySelector('header');

      
    // scrolling down?
    if (currY > this.lastScrollPosition) {
      // when below header, disappear
      if (currY > header.clientHeight - this.wrapper.clientHeight) {
        if (!this.wrapper.classList.contains('nav-mobile--anchored')) {
          this.wrapper.classList.add('nav-mobile--anchored');
        }
      }
    }     

    // must be scrolling up!
    else {
      if (this.wrapper.classList.contains('nav-mobile--anchored')) {
        this.wrapper.classList.remove('nav-mobile--anchored');
      }
    }

    this.lastScrollPosition = currY;
  }


  window.Menu = Menu;
})(window);



const menu = new Menu();

},{}],3:[function(require,module,exports){

},{}]},{},[1]);
