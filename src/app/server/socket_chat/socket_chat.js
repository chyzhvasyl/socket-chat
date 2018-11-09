let message_scheme = require('../schems/message');

module.exports = io =>{

  io.on("connection", function (socket)   {
    io.engine = io.eio;
    let allConnected = Object.keys(io.engine.clients);
    io.emit('online', allConnected);
    console.log('new connection made',  allConnected);

    socket.on('disconnect', () => {
      let alConnected = Object.keys(io.engine.clients);
      io.emit('disconnect', alConnected);
      console.log('User connected', alConnected);
    });

    // socket.on('getSocketIdUser', socketId => {
    //   socket.join(socketId);
    //   console.log('getSocketIdUser' , socketId);
    socket.on('send_message_to_user', content => {
        console.log(content);
        let message = {
          date: new Date(),
          id: socket.id,
          content: content.body
        };
        message_scheme.create(message,  error =>{
          if (error){
            console.log('Error ->', error);
            return error.status(400).end();
          }
          else {
            console.log("Message Received: " + content);


            io.to(content.sendTo).emit('send_message_to_user', message);
            //socket.emit('message', message);
            //socket.to('all').emit('message', message)
            //socket.on('message', (message) => {
            //  console.log("Message Received: " + message);
            //  io.emit('message', {type:'new-message', text: message});
            //});
          }
        });
        //io.emit('message', {type:'new-message', text: message});
      });
    // });


    socket.on('receive_history', () => {
      message_scheme
        .find({})
        .sort({date: -1})
        .limit(50)
        .lean()
        .exec( (err, messages) => {
          if(err){
            err.json(err);
          }
          else {
            socket.emit("history", messages);
          }
        })
    });
  });
};
