'use strict';


class Router {
  constructor (){
  this.page = null;
  }

  buildDom (url, parentElement) {
    switch (url) {
      case '/':
        this.generateLandingPage(parentElement);
        break;
      // case '/movies':
      //   this.generateMoviesPage(parentElement);
      //   break;
      case '/launches':
        this.generateLaunchesPage(parentElement);
        break;
      default:
        this.generateLandingPage(parentElement);
    }
  }
}

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
}

Router.prototype.generateLaunchesPage = function(parentElement) {
  this.page = new LaunchesPage(parentElement);
  this.page.generate();
}


const routerInstance = new Router();