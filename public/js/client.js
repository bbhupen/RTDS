const socket = io('/');
mapboxgl.accessToken = 'token here';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // starting position
    zoom: 9 // starting zoom
})

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
    })
);



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: xxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxm",
    databaseURL: "xxxxxxxxxxxx", 
    projectId: "xxxxxxx",
    storageBucket: "xxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxx",
    appId: "xxxxxxxxx"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var firestore = firebase.firestore()

const docRef = firestore.collection("coordinates")

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const coordinates = []

start.addEventListener("click", () => {
    
    var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
  };

    navigator.geolocation.watchPosition((data,options) => {
        console.log(data)
        console.log("Data uploaded")
        const long = data.coords.longitude
        const lat = data.coords.latitude
        
        var marker = new mapboxgl.Marker()
            .setLngLat([long,lat])
            .addTo(map);
        
        map.jumpTo({ 'center': [long,lat], 'zoom': 14 });
        map.setPitch(30);

        docRef.doc("coordinates").set({
            coords: [long, lat]
        }),
            error => console.log(error)
            
            
        docRef.doc("live").set({
            long: long,
            lat: lat
        })
    }, 
        error => console.log(error))

})

var client = new ClientJS(); // Create A New Client Object
 	$('#os').html('You are using : ' + client.getOS())
	$('#cpu').html('Browser Support : ' + client.getBrowser()); 


socket.on('detected', function(data){
   // console.log(data.identity)
   popUp()
   alert("A " + data.identity + " has been detected")
   $('#identity').html('ON');
});

function popUp(){
	 
var popup = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([91.6435, 26.1426])
.setHTML('<h1>Warning</h1>')
.addTo(map);
	
}
