module.exports = io =>{

  io.on("connection", function (socket)   {
    let message = {
      date: new Date(),
      id: socket.id,
      content: undefined,
      from_me: true
    };
    socket.on('reverse_bote', content => {
      message.content =  content.body.split("").reverse().join("");
          console.log(" reverse_bote Received the Message: " + message.content);
          console.log("From: " + socket.id);
          message.from_me = false;
          io.to(socket.id).emit('reverse_bote', message);
    });
    socket.on('echo_bote', content => {
      message.content =  content.body;
          console.log(" echo_bote Received the Message: " + content.body);
          message.from_me = false;
          io.to(socket.id).emit('echo_bote', message);

    });
    socket.on('ignore_bote', content => {
          console.log(" ignore_bote Received the Message: " + content.body);
    });
    socket.on('spam_bote', content => {
        let rand = 10000 - 0.5 + Math.random() * (120000 - 10000 + 1);
        rand  = Math.round(rand);
      message.content = Math.random().toString(36).substring(7);
            console.log(" spam_bote Received the Message: " + content.body);
      console.log("rand text " +  message.content);
            message.from_me = false;
            setTimeout(() =>{
            io.to(socket.id).emit('spam_bote', message);
          }, rand );
    });
  });
};
