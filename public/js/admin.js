const socket = io('/');
var datapoints = [];
var select = $('#draw');
// var datapoints1 

mapboxgl.accessToken = 'token here';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // starting position
    zoom: 9 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
    })
);

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "api key here",
    authDomain: "your_domain.firebaseapp.com",
    databaseURL: "https://your_domain.firebaseio.com",
    projectId: "project_name",
    storageBucket: "name.appspot.com",
    messagingSenderId: "messeging_sender_id",
    appId: "app_id"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var firestore = firebase.firestore()

const docRef = firestore.collection("coordinates").doc("coordinates")
const docRef2 = firestore.collection("coordinates").doc("live")




//Drawing The location indicator

docRef2.onSnapshot(function (doc) {
    if (doc.exists) {
        var marker = new mapboxgl.Marker()
            .setLngLat([doc.data().long, doc.data().lat])
            .addTo(map);															
        map.jumpTo({ 'center': [doc.data().long, doc.data().lat], 'zoom': 14 });
        // map.jumpTo({ 'center': [doc.data().coords[0], doc.data().coords[1]], 'zoom': 14 });
        map.setPitch(30);
        // loadMap()
    }
})

//Drawing the line


docRef.onSnapshot(function (doc) {
    
    var cords = doc.data().coords
    console.log( doc.data().coords)

    if (datapoints.indexOf(cords) !== -1) {
            console.log("exists")
    }
    else {
        datapoints.push(cords)
		// datapoints1 = JSON.stringify(datapoints)
        console.log(datapoints)
        console.log("Uploading...x.x.x.x.x.x.x.x.")
	    loadMap()
    }

    
    
        
})




function loadMap() {
    select.on('click', function () {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': datapoints
                }
            }
        });
        console.log("wow "+datapoints)
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
		})
    });
}


socket.on('detected', function(data){
   // console.log(data.identity)
   alert("Warning: " + data.identity + " detected")
});


console.log("Finished")