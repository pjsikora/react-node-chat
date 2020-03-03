1. Open FE and API directories to install dependencies `yarn install`
2. Open API folder and run `yarn start`
3. Open FE folder and run `yarn start`

Start simple chating!

---

TODO
1. Add storage in API in method:
```
socket.on('addChatMsg', function(msg){
  // HERE ADD Storage Save action
  socket.broadcast.emit('msgReceived', msg);
});
```
When Save action returns positive response make `socket.broadcast` 
2. Dockerize
3. Add new features
