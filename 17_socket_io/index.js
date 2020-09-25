const http=require('http');
const fs=require('fs');
const port=3000;

const index=fs.readFileSync(__dirname+'/index.html');

const app=http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(index);
});

const io=require('socket.io').listen(app);

var sendTime=function(){
  io.emit('time', { time: new Date().toJSON() });
}

var count=0;
var counter=function(){
  io.emit('count', { count: count });
  count++;
}

setInterval(sendTime,3000);
setInterval(counter,1000);

io.on('connection', function(socket){
  socket.emit('welcome',{message: 'Welcome!',id:socket.id});
});

app.listen(port);
console.log(`Listening on http://localhost:${port}`);
