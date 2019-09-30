'use strict';

function LaunchesService() {
  this.baseUrl = 'https://api.spacexdata.com/v3/launches/'
}

LaunchesService.prototype.getAllLaunches = async function() {
  const response = await fetch(`${this.baseUrl}`);
  const data = await response.json();
  console.log(data);
  return data;
}

const LaunchesServiceInstance = new LaunchesService();