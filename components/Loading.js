'use strict';

function Loading(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
}

Loading.prototype.generate = function() {
  this.elements ='<div class="loading-wrapper"><div class="loading-cont"><p>LOADING...</p><img src="./images/loading-back.gif"></div></div>';
  this.render();
}

Loading.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}