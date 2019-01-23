 const mapboxgl = require('mapbox-gl');
 const buildMarker = require('./marker')
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1lc2szIiwiYSI6ImNqcjlvMWtlbjBqOTM0NHBnaWhzbWJoNnQifQ.8XxqlsqQ_TzWZ-MiV_k-fg';
const map = new mapboxgl.Map({
container: 'map',
center: [-74.009, 40.705],
zoom: 12,
style: 'mapbox://styles/mapbox/streets-v10'
});

const fullstackNYC = document.createElement('div')
fullstackNYC.style.width = "32px"
fullstackNYC.style.height = "39px"
fullstackNYC.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
//new mapboxgl.Marker(fullstackNYC).setLngLat([-74.009, 40.705]).addTo(map)



// const marker2 = buildMarker("hotel", [-74.009151, 40.705086])
// marker2.addTo(map)