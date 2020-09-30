const express = require('express');
const socket = require('socket.io');

//App setup
const app = express();
const server = app.listen(process.env.PORT || 3000, function() {
    console.log("Server started");
  }); 

//Default ejs and Static files
app.set('view engine' , 'ejs')
app.use(express.static(__dirname+'/public')) //dir name is the folder in which app.js exists

//socket connected with server
const io = socket(server);

app.get('/survillance',function(req,res){
	res.render('index')
})

app.get('/',function(req,res){
	res.render('client')
})

app.get('/admin',function(req,res){
	res.render('admin')
})
io.on('connection',(socket)=>{
	// console.log('connected')
	
	socket.on('detected',function(data){
		// console.log(data)
		io.sockets.emit('detected' , data)
	})
	
})
