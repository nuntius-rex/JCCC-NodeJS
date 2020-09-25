var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var reload =require('reload');
//var ip = '10.69.44.18';
var port='3000';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/jquery', express.static(__dirname+'/node_modules/jquery/dist/'));


var message_past=[];

io.on('connection', function(socket){
  socket.emit('server-message',{message:"Welcome to Dan's NODE CHAT!"});
  //!! = Converts Object to boolean. If it was falsey (e.g. 0, null, undefined, NaN, etc.), it will be false, otherwise, true.
  //In this case, testing that the array item exist before looping:
  for(var i = 0; i<20 && !!message_past[i]; i++ ){
    socket.emit('user-message',message_past[i]);
  }
  socket.on('user-message', function(data){
    message_past.push(data);
    io.emit('user-message', data);
  })
});

http.listen(port,  function(){
  console.log("Listening on http://localhost:"+port); //http.address().address
})
