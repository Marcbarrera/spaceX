'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section>
      <header class="landing-page">
        <h1>This is the best SPACEX page you could find</h1>
      </header>
      <section class="ships-container">
      <h2 class="ship-section-title">The spaceX ships</h2>
       <img src="./images/spacex-ships.png">
       <article class="ships-name">   
         <h2>falcon 1</h2>
         <h2>falcon 9</h2>  
         <h2>falcon Heavy</h2>
         <h2>BFR</h2>
       </article>
      </section>
      <main class="pics-wrapper">
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