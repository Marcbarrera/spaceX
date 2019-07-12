'use strict';

function Card(launch) {
  this.launch = launch;
}

Card.prototype.generate = function() {
  if(this.launch.links.flickr_images.length === 0) {
    this.launch.links.flickr_images = ['https://media.wired.com/photos/5cd5df1f2948ca2e63b090f0/4:3/w_2400,c_limit/01_SPoW_051119.jpg']
  }

  if(!this.launch.details) {
    this.launch.details = 'No description...'
  }
  return `
  <article class="launch-card">
    <div class="card">
      <div class="first">
          <p><strong>${this.launch.mission_name}</strong></>
          <p>${this.launch.rocket.rocket_name}</p>
         <p>${this.launch.launch_year}</p>
          <p>nº: ${this.launch.flight_number}</p>
         
      </div>
      <div class="second">
          <img src="${this.launch.links.mission_patch}" >
      </div>
      <div class="third">
          <p>${this.launch.details}</p>
      </div>
      <div class="fourth">
        <img src="${this.launch.links.flickr_images[0]}" class="mission-patch">
      </div>
    </div>
  </article>
`;
}
