import {Component, OnInit  } from '@angular/core';
import {Message} from '../../classes/message';
import {WebsocketService} from '../../services/websocket.service';
import {ChatService} from '../../services/chat.service';
import * as $ from 'jquery';
import {_} from 'underscore';
import {FilterUserPipe} from '../pipes/filter-user.pipe';


@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})

export class ChatBodyComponent implements OnInit {
  result: object;
  message: Message = new Message();
  message_array: any = [];
  online_users;
  query = '';
  connection;
  sendTo: string;
  constructor( private chatservice: ChatService, private websocketservice: WebsocketService)
  {

  }
  chat_autoscroll() {
    $(document).ready(function () {
      const chat_body =  $('.chat_body');
      const chat_height = chat_body.prop('scrollHeight');
      chat_body.scrollTop(chat_height);
    });
  }

  openChat(socketId ){
    this.message_array = [];
    this.websocketservice.sendSocketIdUser(socketId) ;
    this.sendTo = socketId;
  }

  public ngOnInit(): void {
    this.websocketservice.getSocket().subscribe(socket => {
      this.online_users = socket;
      console.log('socket', socket);
    });
    this.websocketservice.getMessageFromUser().subscribe(message => {
      this.message_array.push(message);
      console.log('getMessageFromUser', message);
      this.message_array.reverse();
    });
    //this.websocketservice.getMessages().subscribe(message => {
    //  this.message_array = message;
    //  this.message_array.reverse();
    //  this.chat_autoscroll();
    //});

   // this.websocketservice.getMessage().subscribe( message   => {
   //   this.message_array.push(message);
   //   this.chat_autoscroll();
   //   this.message.content = '';
   // });


  }
  sendMessage(){
    this.websocketservice.send_message({body: this.message.content, sendTo: this.sendTo});
    this.chat_autoscroll();
    this.message.content = '';
  }
//old version
  // public ngOnInit(): void {
//
  //   this.websocketservice.getSocket().subscribe(socket => {
  //     this.online_users = socket;
  //     //console.log('online_users', socket);
  //   });
  //   this.websocketservice.getMessages().subscribe(message => {
  //     this.message_array = message;
  //     this.message_array.reverse();
  //   });
//
  //   this.chatservice.messages.subscribe(msg => {
  //     this.message.date = msg.date;
  //     this.message._id = msg.id;
  //     this.message.content = msg.content;
  //     this.message_array.push({
  //       date: this.message.date,
  //       _id: this.message._id,
  //       content: this.message.content,
  //     });
  //     this.chat_autoscroll();
  //     this.message.content = '';
//
  //   });
//
//
  // }


  // sendMessage()
  // {
  //   this.chatservice.sendmessage(this.message.content);
  //   this.chat_autoscroll();
//
  // }
}
