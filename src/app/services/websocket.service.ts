import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {EventEmitter} from '@angular/core';


@Injectable()
export class WebsocketService {
  private socket;
  private bot_connection;
  online_users = [];
  socket_user_id: string;
  event:string  ;
  constructor() {
    this.socket = io(environment.ws_url);
    this.bot_connection = io(environment.bot_url /* + `?reverse_bot` */);

  }


  send_message_to_bot(message, event)
  {
    this.event = event;
    console.log('this.event = event',this.event );
    this.bot_connection.emit(event, message);
  }


  getResponseFromBot() {
      return new Observable(observer => {

        this.bot_connection.on(this.event, (messages) => {
          console.log('this.event',this.event);
          observer.next(messages);
        });
      });
  }


 // send_message_to_bot(message)
 // {
 //   const update = {
 //     message: {
 //       text: message
 //     }
 //   };
 //   this.bot_connection.send(  update);
 // }
  getMessages() {
    return new Observable(observer => {
      this.socket.on('history', (messages) => {
        console.log('history', messages);
        // messages.reverse();
        observer.next(messages);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  getMessageFromUser(){
    let observable = new Observable(observer => {
      this.socket.on('send_message_to_user', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  getMyMessage(){
    let observable = new Observable(observer => {
      this.socket.on('my_message', (data) => {

        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  sendSocketIdUser(socketId) {
    this.socket.emit('getSocketIdUser', socketId);



    //return new Observable(observer => {
    //  this.socket_user_id = socketId;
    //  this.socket.emit('getSocketIdUser', socketId => {
    //    console.log('getSocketIdUser', socketId);
    //    socketId = this.socket_user_id;
//
    //   observer.next(socketId);
    //  });
    //});
  }


  getSocket() {
    return new Observable(observer => {
      //this.socket.on('online', (online_users) => {
      //  observer.next(online_users);
      //});
      this.socket.on('online', (numberOfOnlineUsers) => {
        this.online_users = numberOfOnlineUsers;
        //this.online_users.push(numberOfOnlineUsers);
        observer.next(numberOfOnlineUsers);
      });
      this.socket.on('disconnect', (numberOfOnlineUsers) => {
        this.online_users = numberOfOnlineUsers;
        // this.offline_users.push(numberOfOnlineUsers);
        // this.online_users =  _.difference(this.online_users, this.offline_users);
        observer.next(numberOfOnlineUsers);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }
  getYourSocket() {
    return new Observable(observer => {
      this.socket.on('ConnectYourSockedId', (ConnectYourSockedId) => {
        this.socket_user_id = ConnectYourSockedId;
        observer.next(ConnectYourSockedId);
      });
      this.socket.on('DisconnectYourSockedId', (ConnectYourSockedId) => {
        this.socket_user_id = ConnectYourSockedId;
        observer.next(ConnectYourSockedId);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }
getBotSocket(){
  return new Observable(observer => {
    this.socket.on('reverse_bot', (ConnectYourSockedId) => {
      console.log('getBotSocket', ConnectYourSockedId);
      observer.next(ConnectYourSockedId);
    });

    return () => {
      this.socket.disconnect();
    };
  });

}


  send_message(message)
  {
    this.socket.emit('send_message_to_user', message);
  }


 // getMessage() {
 //   const observable = new Observable(observer => {
 //     this.socket.on('send_message_to_user', (data) => {
 //       //this.socket.emit('receive_history');
 //       observer.next(data);
 //     });
 //     return () => {
 //       this.socket.disconnect();
 //     };
 //   });
 //   return observable;
 // }

  //connect(): Rx.Subject<MessageEvent> {
  //  this.socket = io(environment.ws_url);
  //  const observable = new Observable(observer => {
  //    this.socket.on('message', (data) => {
  //      // console.log('Received message from Websocket Server', 'connected!');
  //      this.socket.emit('receive_history');
  //      observer.next(data);
  //    });
  //    // this.socket.on('history', messages => {
  //    //  console.log('history', messages);
  //
  //    // });
  //    return () => {
  //      this.socket.disconnect();
  //    };
  //  });
  //  const printed_message = {
  //    next: (data: Object) => {
  //      this.socket.emit('msg', data);
//
//
  //      console.log(data);
  //    },
  //  };
  //  const message_history = {
  //    next: (data: Object) => {
  //      console.log('data', data);
  //      this.socket.emit('history', data);
  //    },
  //  };
  //  return Rx.Subject.create(printed_message, observable);
  //}
}
