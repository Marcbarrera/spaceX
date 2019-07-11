'use strict';

function LaunchesService() {
  this.baseUrl = 'https://api.spacexdata.com/v3/launches/'
}

LaunchesService.prototype.getAllLaunches = async function() {
  var response = await fetch(`${this.baseUrl}`);
  var data = await response.json();
  console.log(data);
  return data;
}

var LaunchesServiceInstance = new LaunchesService();