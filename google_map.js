var baseUrl = 'https://www.googleapis.com/';
var API_key = 'AIzaSyC6IeWIYNrcXUMhTSy2XORDhQyboXO-atM';
const {Loader} = require('google-maps');


/* liste de villes exemples */
export var tMarker = [
    { lat : 44.837368,
      lon : -0.576144,
      title : 'Bordeaux'
    },
    { lat :45.767299,
      lon : 4.834329,
      title : 'Lyon'
    },
    {lat :43.297612,
     lon : 5.381042,
     title : 'Marseille'
    },
    {
      lat : 48.856667,
      lon :  2.350987,
      title : 'Paris'
    }
];


export function showMap(resss){

  const loader = new Loader(API_key);
  
    loader.load().then(function (google) {
      var map;
 
      resss.then(values => { 
        let d = values[1];

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.71, lng: 19.37},
          zoom: 1
        });

        createMarqueur(resss, map);
    
      });
      
    });

}

export function showMapQuality(r){

  const loader = new Loader(API_key);
  
    loader.load().then(function (google) {
      var map;

      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.71, lng: 19.37},
        zoom: 1
      });
      
      createMarqueurQuality(r, map);
  
    });

}

export function createMarqueurQuality(tab, map){
  var oLatLng, oMarker;
    
  //var i, nb = tab.length;
    console.log("le reste du tableau :", tab);
    let lati = tab[1];
    let longi = tab[0];

    oLatLng = new google.maps.LatLng( lati, longi);
    oMarker = new google.maps.Marker({
      position : oLatLng,
      map : map
    });

    var m = "pays : " + tab[2] + " <br> région : " + tab[3] + "<br> ville : " + tab[4]; 

    attachSecretMessage(oMarker, m);

}

export function createMarqueur(tab, map){
  console.log(tab);
    var oLatLng, oMarker, data;
    
    tab.then(values => { 

      var nb = values.length;
      console.log(nb); 
      
      for(var i = 0; i < nb; i++){
        
        data = values[i];
        
        oLatLng = new google.maps.LatLng( data.lat, data.lon);
        oMarker = new google.maps.Marker({
          position : oLatLng,
          map : map
        });
        console.log(data.lat,data.lon)
        attachSecretMessage(oMarker, data.date);
      }

    });
    
}


// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });

}
