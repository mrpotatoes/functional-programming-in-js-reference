(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';
  $docsify.plugins = [function (hook, vm) {
    hook.doneEach(function (html, next) {
      var el = document.querySelector('.sidebar-nav .active');

      if (el) {
        el.classList.add('open');

        while (el.className !== 'sidebar-nav') {
          if (el.parentElement.tagName === 'LI' || el.parentElement.className === 'app-sub-sidebar') {
            el.parentElement.classList.add('open');
          }

          el = el.parentElement;
        }
      }

      next(html);
    });
  }].concat($docsify.plugins || []);
  window.addEventListener('hashchange', function (e) {
    requestAnimationFrame(function () {
      var el = document.querySelector('.sidebar-nav .active');

      if (el) {
        el.parentElement.parentElement.querySelectorAll('.app-sub-sidebar').forEach(function (dom) {
          return dom.classList.remove('open');
        });

        if (el.parentElement.tagName === 'LI' || el.parentElement.className === 'app-sub-sidebar') {
          el.parentElement.classList.add('open');
        }
      }
    });
  });
  document.addEventListener('scroll', function (e) {
    requestAnimationFrame(function () {
      var el = document.querySelector('.app-sub-sidebar > .active');

      if (el) {
        el.parentElement.parentElement.querySelectorAll('.app-sub-sidebar').forEach(function (dom) {
          return dom.classList.remove('open');
        });

        while (el.parentElement.classList.contains('app-sub-sidebar')) {
          el.parentElement.classList.add('open');
          el = el.parentElement;
        }
      }
    });
  }, false);
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.sidebar-nav').addEventListener('click', function (e) {
      if (e.target.tagName === 'P') {
        e.target.parentElement.classList.toggle('open');
      }

      if (e.target.tagName === 'A') {
        var elp = e.target.parentElement;

        if (elp.tagName === 'LI') {
          if (elp.classList.contains('open')) {
            requestAnimationFrame(function () {
              elp.classList.add('collapse');
              elp.classList.remove('open');
              elp.classList.add('hold');
            });
          } else {
            requestAnimationFrame(function () {
              if (elp.classList.contains('hold')) {
                elp.classList.remove('collapse');
                elp.classList.add('open');
                elp.classList.remove('hold');
              }
            });
          }
        }
      }
    }, true);
  });

})));
