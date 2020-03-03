const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const morgan = require('morgan');



app.use(morgan('combined'));

app.get('/', function(req, res){
  res.json('API');
});

io.on('connection', function(socket){

  socket.broadcast.emit('hi');

  socket.on('disconnect', function(){

  });

  socket.on('addChatMsg', function(msg){
    socket.broadcast.emit('msgReceived', msg);
  });
});

http.listen(3210, function(){
  console.log('listening on *:3210');
});
