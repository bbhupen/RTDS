let yolo;
let classifier;
let webCam 
let objects = [];
let probability = "" ;
let phoneButton 
let cardButton
let trainButton
let label = $('#label')

const socket = io('/');

function modelReady(){
    console.log("ready")
    yolo.detect(webCam,result)
    // mobilenet.predict(result);
}{}

function webCamReady(){
    console.log("video ready")
    
}

function whileTraining(loss){
if (loss == null){
    console.log("trainging complete")
    classifier.classify(result)
} else {
     console.log(loss)
       }
}



function result(err , data){
    if(err){
        console.log(err);
    }
    objects = data 
    yolo.detect(webCam,result)

}

function setup(){
    var myCanvas = createCanvas(600,520);
	 myCanvas.parent('frame')
    webCam = createCapture(VIDEO);
    webCam.hide()
    background(0);
    yolo = ml5.objectDetector('cocossd',{},modelReady)
 
}

function draw(){
    background(0)
    image(webCam , 0 ,0);
  

    if (objects) {
        objects.forEach(detection => {
          noStroke();
          fill(255);
          strokeWeight(2);
          text(detection.label, detection.x + 4, detection.y + 10)
    
          noFill();
          strokeWeight(3);
			
          if(detection.label == 'dog'){
            stroke(255, 0, 0);
			socket.emit('detected',{
				identity : detection.label
			})  
          } 
			else if (detection.label == 'person'){
				stroke(0,255,0);
			// 	socket.emit('detected',{
			// 	identity : detection.label
			// })  
			} else {
            stroke(0,0, 255);
          }
          rect(detection.x, detection.y, detection.width, detection.height);  
		  label.html(detection.label)	
        })
      } 
    
}
