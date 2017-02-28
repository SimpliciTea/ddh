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
    var content = document.querySelector('div.content');
      
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
      if (currY < header.clientHeight - 50) {
        if (this.wrapper.classList.contains('nav-mobile--anchored')) {
          this.wrapper.classList.remove('nav-mobile--anchored');
        }
      }
    }

    this.lastScrollPosition = currY;
  }


  window.Menu = Menu;
})(window);



const menu = new Menu();
