'use strict';

function main(){
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var footerInstance = null;
  var rootElement = document.querySelector('#root');
  var image = '<img class="home-button" src="./spacex-logo.jpg">';
  var links = [
    {name: image,
    url: '/'}
    ,
    {name: 'launches API information',
    url: '/launches'}
  ];

  generateLayout();
  generateNavbar();
  generateFooter();
  addListenersToNavbar();
  activateRouter();
  backHome();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  function backHome() {
    var homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', ()=>{
      location.reload();
    })
  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links)
    navbarInstance.generate();
  }

  function generateFooter() {
    footerInstance = new Footer(layoutInstance.footer)
    footerInstance.generate();
  }

  function activateRouter() {
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
  }

  function addListenersToNavbar() {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', changePage);
    })
  }

  function changePage(event) {
    var url = event.target.attributes.url.value;
    routerInstance.buildDom(url, layoutInstance.main);
  }
};

window.addEventListener('load', main);