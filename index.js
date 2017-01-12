var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('disconnect', function(data){

   });
  socket.on('notify', function(msg){
      io.emit('chat message', msg);
    });

  socket.on('join', function (data) {
      socket.join(data.tkn); // We are using room of socket io
      io.sockets.in('tkn144').emit('new_msg', {msg: 'hello'});
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


