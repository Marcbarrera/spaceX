'use strict';

class LaunchesPage{
constructor(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
  this.launches      = null;
  this.loading       = null;
}

async generate() {

  this.generateLoading();

  await this.connectToAPI();
  this.elements = `
    <header>
      <h2 class="launches-title">Welcome to launches</h2>
    </header>
    <section class="cards-container">
  `;
  this.launches.forEach((launch) => {
    const launchCard = new Card(launch);
    this.elements += launchCard.generate();
  })
  this.elements += '</section>';

  this.render();
}

render (){
    this.parentElement.innerHTML = this.elements;
}

async connectToAPI () {
  this.launches = await LaunchesServiceInstance.getAllLaunches();
}

generateLoading (){
    this.loading = new Loading(this.parentElement);
    this.loading.generate();
  }
}
