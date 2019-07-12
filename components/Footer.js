'use strict';

function Footer(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
}

Footer.prototype.generate = function() {
  this.elements = `
    <ul class="footerlinks">
      <li><a href="#"><img src="https://img.icons8.com/color/96/000000/facebook-new.png"></a></li>
      <li><a href="#"><img src="https://img.icons8.com/color/96/000000/instagram-new.png"></a></li>
      <li><a href="#"><img src="https://img.icons8.com/color/96/000000/twitter.png"></a></li>
      <li><a href="#"><img src="https://img.icons8.com/color/96/000000/flickr.png"></a></li>
      </ul>
  `;

  this.render();
}

Footer.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}