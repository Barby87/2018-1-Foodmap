
// Inicializando la comunicación con los servicios de back-end
var platform = new H.service.Platform({
  app_id: 'SvaVFK30FoK6MSSeVH5e',
  app_code: 'Q2xoQ6Mumd9vR2Yo2KYQ2Q',
});

// Obtain the default map types from the platform object

// Instantiate (and display) a map object:
var defaultLayers = platform.createDefaultLayers();
var mapContainer = document.getElementById('mapContainer');

// Ajustando el punto central del mapa y el nivel de zoom inicial del mapa, pasando un objeto de opciones al objeto constructor H.Map.
var coordinates = {
  lat: 52.530974, // HERE HQ in Berlin, Germany
  lng: 13.384944
};

var mapOptions = {
  center: coordinates,
  zoom: 16
}

var map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions);

// Agregando interactividad al mapa, habilitando el sistema de eventos. 
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


// Asegurando que el mapa reaccione correctamente cuando se cambie el tamaño de la ventana, para lo cual se agrega el siguiente detector de eventos:

window.addEventListener('resize', function () {
  map.getViewPort().resize();
});

/*
// Agregando marcador
var marker = new H.map.Marker(coordinates);
map.addObject(marker);*/


// Función para obtener posición actual del dispositivo
function updatePosition(event) {
 
 var HEREHQcoordinates = {
    lat: event.coords.latitude,
    lng: event.coords.longitude
  };

  // Declarando variable marcador, se añade un marcador cada vez que el dispositivo cambie de ubicación.
  var marker = new H.map.Marker(HEREHQcoordinates);
  map.addObject(marker);

  // Centrar el mapa cada vez que cambie posición
  map.setCenter(HEREHQcoordinates);
}

// El método watchPosition llamará a la función de éxito cada vez que cambie la posición del dispositivo.
navigator.geolocation.watchPosition(updatePosition);

/*// watchPosition  devuelve una identificación que se puede usar para llamar a clearWatch más tarde para dejar de ver actualizaciones de ubicación:

var watchID = navigator.geolocation.watchPosition(function(position) {
	// Do something interesting here
});

// … later

navigator.geolocation.clearWatch(watchID);
*/


