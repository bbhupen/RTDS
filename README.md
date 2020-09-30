# RTDS
## Real-time Tracking And Detection System (R.T.D.S)
We provided an affordable, scalable and state of the art end-to-end solution for tracking vehicles,
peoples or any precious cargo. The whole idea comprises of three parts:

1. Machine Learning Object Detection
2. Location Tracking
3. Node.js Server

The idea of the solution is that, the one who is carrying the precious cargo will have a very light
weight device with them, or any Smartphone with GPS will work. Our solution will have a web
interface fully responsive for both mobile and desktop devices. We will have two UI. One UI (admin
UI) is for the person in charged and the other UI (client UI) for the vehicle or person that is being
tracked. The admin UI will have access to vehicles location, map, speed, route, any approaching
danger and other necessary info. The client UI will have access to the map and it’s own location
along with some necessary info.
The location of the client will continuously sync between admin and client using cloud computing.
The location points from the client will go to the cloud and in real-time it’ll get updated in the admin
UI. There is no delay between the updates so it shows accurate location of the client
We also hosted our idea in a website at https://assaminnovate.herokuapp.com/ and uploaded a
demonstration video here
Technology Used
• Security Camera (Webcam, CCTV, IP Camera, etc)
• Any Device with GPS or Internet (Phone, Laptop, Smart Watch, etc)
• Geo Location API
• ML-5 Library for Training Models
• Node.js Server computing
• Mapbox API
• Heroku (Hosting the website)
• Firebase Firestore as database
Machine Learning Object Detection
Ml5-Object-Detector on COCO model was used for Object detection. p5.js was used to provide a
canvas to camera on which object detection was processed.
This was tested on several images from google to detect and frame the objects classes and return an
array with a label and confidence. This Model is capable of detecting more than one object in a single 
frame. The high accuracy and confidence was not always attained but training this model with external
data will definitely improve it in future . Traffic , Public places , wildlife images were fed to the model.


## Location Tracking
The location tracking part comprises of three parts. The admin side, user side and the Server. Each
one explained individually below.:
The admin side UI
The admin side UI is contained of all the data feed from the user. It includes its location, path taken
and upcoming warnings in the route. We used Geolocation API to monitor the user’s location. And
we used Mapbox API to draw the location of the user in the map. The necessary data from the user
side is synced from user to admin using Firebase Firestore, due to its robust No-SQL database.

## The User side UI
The client side UI basically consists of a map showing the user’s current location and upcoming
warnings. The warnings will be synced from the Machine Learning Model and displayed in the UI
when the user reaches close proximity of some specified distance from the warnings.

## The Node.js server
The server is the main connection and gateway between the object detector and the location
tracking. It uses a JavaScript Library, socket.io which enables it to transfer data between the clients
easily without any delay and database.
The following images illustrates the entire server role in this project .

## Project Related Links :
1) Hosted Website - https://assaminnovate.herokuapp.com/
2) Git Hub Link - https://github.com/bbhupen/RTDS
3) Video Demonstration - https://youtu.be/FjAtXw-mpoA
4) Project apk link (optional) - https://drive.google.com/file/d/1JQIrqhQgVAxYoSXGbHRu0_43a7EUh7un/view
