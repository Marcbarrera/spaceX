'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section>
      <header class="landing-page">
        <h1>This is the best SPACEX page you can find</h1>
      </header>
      <main class="landing-wrapper">
        <div class="a"></div>
        <div class="b"></div>
        <div class="c"></div>
        <div class="d"></div>
      </main>
    </section>
  `;
  
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}