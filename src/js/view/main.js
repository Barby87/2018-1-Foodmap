/*window.onload = () => {
	setTimeout(function(){
    const preload = document.getElementById('preload');
    const home = document.getElementById('home');
    preload.style.display = 'none';
    home.style.display = 'block';
  },4000);
  
}*/

var platform = new H.service.Platform({
  'app_id': 'SvaVFK30FoK6MSSeVH5e ',
  'app_code': 'Q2xoQ6Mumd9vR2Yo2KYQ2Q '
  });

// Obtain the default map types from the platform object:
var mapTypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  mapTypes.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });

  function updatePosition (event) {
    var HEREHQcoordinates = {
      lat: event.coords.latitude,
      lng: event.coords.longitude
    };
  
    var marker = new H.map.Marker(HEREHQcoordinates);
    map.addObject(marker);
    map.setCenter(HEREHQcoordinates);
  }
  
  navigator.geolocation.watchPosition(updatePosition);