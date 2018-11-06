import {Component, OnInit, ɵEMPTY_ARRAY} from '@angular/core';
import {Message} from '../../classes/message';
import {WebsocketService} from '../../services/websocket.service';
import {ChatService} from '../../services/chat.service';
import * as io from 'socket.io-client';
import * as $ from 'jquery';
import {_} from 'underscore';
import {environment} from '../../../environments/environment';
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
  sendMessage()
  {
    this.chatservice.sendmessage(this.message.content);
    this.chat_autoscroll();

  }
 public ngOnInit(): void {

   this.websocketservice.getSocket().subscribe(socket => {
     this.online_users = socket
     console.log('online_users', socket);
   });
    this.websocketservice.getMessages().subscribe(message => {
      this.message_array = message;
      this.message_array.reverse();
    });

    this.chatservice.messages.subscribe(msg => {
      this.message.date = msg.date;
      this.message._id = msg.id;
      this.message.content = msg.content;
      this.message_array.push({
        date: this.message.date,
        _id: this.message._id,
        content: this.message.content,
      });
      this.chat_autoscroll();
      this.message.content = '';

    });


  }

}
