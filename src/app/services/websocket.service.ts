import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';



@Injectable()
export class WebsocketService {
  private socket;
  online_users = [];
  constructor() {
  }
  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(environment.ws_url);
    const observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log('Received message from Websocket Server', 'connected!');
        this.socket.emit('receive_history');
        observer.next(data);
      });
      // this.socket.on('history', messages => {
      //  console.log('history', messages);
//
      // });
      return () => {
        this.socket.disconnect();
      };
    });
    const printed_message = {
      next: (data: Object) => {
        this.socket.emit('msg', data);


        console.log(data);
      },
    };
    const message_history = {
      next: (data: Object) => {
        console.log('data', data);
        this.socket.emit('history', data);
      },
    };
    return Rx.Subject.create(printed_message, observable);
  }
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
  getSocket() {
    return new Observable(observer => {
      //this.socket.on('online', (online_users) => {
      //  observer.next(online_users);
      //});

      this.socket.on('online', (numberOfOnlineUsers) => {
        this.online_users = numberOfOnlineUsers;
        //this.online_users.push(numberOfOnlineUsers);
        console.log('number 0f online', numberOfOnlineUsers);
        observer.next(numberOfOnlineUsers);
      });
      this.socket.on('disconnect', (numberOfOnlineUsers) => {
        this.online_users = numberOfOnlineUsers;

        // this.offline_users.push(numberOfOnlineUsers);
        // this.online_users =  _.difference(this.online_users, this.offline_users);
        observer.next(numberOfOnlineUsers);
        console.log('number 0f disconnect', numberOfOnlineUsers);
      });


      return () => {
        this.socket.disconnect();
      };
    });
  }
  getOnline(){
    this.socket.on('online', (numberOfOnlineUsers) => {
      this.online_users = numberOfOnlineUsers;
      //this.online_users.push(numberOfOnlineUsers);
      console.log('number 0f online', numberOfOnlineUsers);
    });
    this.socket.on('disconnect', (numberOfOnlineUsers) => {
      this.online_users = numberOfOnlineUsers;

      // this.offline_users.push(numberOfOnlineUsers);
      // this.online_users =  _.difference(this.online_users, this.offline_users);
      console.log('number 0f disconnect', numberOfOnlineUsers);
    });

  }
}
