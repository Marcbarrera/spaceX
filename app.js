'use strict';

function main(){
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let navbarInstance = null;
  let footerInstance = null;
  let rootElement = document.querySelector('#root');
  let image = '<img class="home-button" src="./images/spacex-logo.jpg">';
  let links = [
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
    const homeButton = document.querySelector('.home-button');
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
    const anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', changePage);
    })
  }

  function changePage(event) {
    const url = event.target.attributes.url.value;
    routerInstance.buildDom(url, layoutInstance.main);
  }
};

window.addEventListener('load', main);