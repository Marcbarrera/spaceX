'use strict';

function LaunchesPage(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
  this.launches        = null;
  this.loading       = null;
}

LaunchesPage.prototype.generate = async function() {
  this.generateLoading();

  await this.connectToAPI();
  this.elements = `
    <header>
      <h2>Welcome to launches</h2>
    </header>
    <section class="cards-container">
  `;
  this.launches.forEach((launch) => {
    var launchCard = new Card(launch);
    this.elements += launchCard.generate();
  })
  this.elements += '</section>';

  this.render();
}

LaunchesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LaunchesPage.prototype.connectToAPI = async function() {
  this.launches = await LaunchesServiceInstance.getAllLaunches();
}

LaunchesPage.prototype.generateLoading = function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
}