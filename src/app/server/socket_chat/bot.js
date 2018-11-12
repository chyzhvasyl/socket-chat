// данне рішення просто витратило час в void  !

let Botmaster = require('botmaster');
let SocketioBot = require('botmaster-socket.io');

module.exports = bot_server =>{
  const botmaster = new Botmaster({
    server: bot_server
  });
  const socketioSettings = {
    id: 'reverse_bot',//{
    //reverse_bot: 'reverse_bot',
    //echo_bot: 'echo_bot',
    //spam_bot: 'spam_bot',
    //ignore_bote: 'ignore_bote'
    //},
    server: bot_server
  };
  const reverse_bot = new SocketioBot(socketioSettings );
  botmaster.addBot(reverse_bot);
  let myIncomingMiddlewareController = (bot, update) => {
    console.log('meeeesaageeee tooo booot received', update.message.text.body);
    const messages = ['I\'m sorry about this.',
      'But it seems like I couldn\'t understand your message.',
      'Could you try reformulating it?'];
    console.log('id', update.sender.id);
    return bot.sendTextCascadeTo(messages, update.sender.id);
  };
  botmaster.use({
    type: 'incoming',
    name: 'Update replier', // this is optional, but should ideally describe what your middleware does
    controller: myIncomingMiddlewareController,
  });
  botmaster.on('error', (bot, err) => {
    console.log(err.stack);
  });
};






//module.exports = bot_server =>{
//
//
//
//
//  const reverse_bot_master = new Botmaster({
//    server: bot_server
//  });
//  const socketioSettings = {
//    reverse_bot: {
//      id: 'reverse_bot',
//      server: bot_server
//    },
//    echo_bot: {
//      id: 'echo_bot',
//      server: bot_server
//    },
//    spam_bot: {
//      id: 'spam_bot',
//      server: bot_server
//    },
//    ignore_bote: {
//      id: 'ignore_bote',
//      server: bot_server
//    }
//  };
//  const reverse_bot = new SocketioBot(socketioSettings.reverse_bot);
//  reverse_bot_master.addBot(reverse_bot);
//  let reverse_controller = (bot, update) => {
//    let content = update.message.text.body.split("").reverse().join("");
//    let sender_id = update.sender.id;
//    console.log('content', content);
//    return bot.sendTextCascadeTo(content, sender_id);
//  };
//
//  reverse_bot_master.use({
//    type: 'incoming',
//    name: 'Update replier', // this is optional, but should ideally describe what your middleware does
//    controller: reverse_controller,
//  });
//
//
//
//
//
//  reverse_bot_master.on('error', (bot, err) => {
//    console.log('EERRROOR', err.stack);
//  });
//
//
//
//};

