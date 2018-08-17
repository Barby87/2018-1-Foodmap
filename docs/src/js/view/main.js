window.onload = () => {
	setTimeout(function(){
    const preload = document.getElementById('preload');
    const home = document.getElementById('home');
    preload.style.display = 'none';
    home.style.display = 'block';
  },3000);

}

// Inicializando la comunicación con los servicios de back-end
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

  
  // Función para obtener posición actual del dispositivo
  function updatePosition (event) {
    var HEREHQcoordinates = {
      lat: event.coords.latitude,
      lng: event.coords.longitude
    };
  
    // Declarando variable marcador
    var marker = new H.map.Marker(HEREHQcoordinates);
    map.addObject(marker);
    map.setCenter(HEREHQcoordinates);
  }
  
  // El método watchPosition llamará a la función de éxito cada vez que cambie la posición del dispositivo.
  navigator.geolocation.watchPosition(updatePosition); 