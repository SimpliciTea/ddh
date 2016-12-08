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
  }

  window.Menu = Menu;
})(window);


const menu = new Menu();
