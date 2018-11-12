import {Component, OnInit  } from '@angular/core';
import {Message} from '../../classes/message';
import {WebsocketService} from '../../services/websocket.service';
import {ChatService} from '../../services/chat.service';
import * as $ from 'jquery';
import {_} from 'underscore';
import {FilterUserPipe} from '../pipes/filter-user.pipe';
//import moment from 'moment';
import { CookieService } from 'angular2-cookie/core';

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
  socket_user_id;
  from_me: boolean;
  botes: any[];
  event: string;
  toggle = false;

  constructor( private chatservice: ChatService, private websocketservice: WebsocketService,  private _cookieService:CookieService)
  {
    this.botes = this.chatservice.getimages()
  }

  chat_autoscroll() {
    $(document).ready(function () {
      const chat_body =  $('.chat_body');
      const chat_height = chat_body.prop('scrollHeight');
      chat_body.scrollTop(chat_height);
    });
  }
  select_bote(event){
    this.message_array = [];
    this.event = event;
    console.log('event',event)
}
  openChat(socketId ){
    this.message_array = [];
    this.websocketservice.sendSocketIdUser(socketId) ;
    this.sendTo = socketId;
  }

  getCookie(key: string){
    console.log('getCookie', this._cookieService.get(key) );
    return this._cookieService.get(key);
  }
  public ngOnInit(): void {
    this.websocketservice.getYourSocket().subscribe(socket => {
      //this.socket_user_id = socket;
    });
    setTimeout(() => {
      this.socket_user_id = this.websocketservice.socket_user_id;
      console.log('this.online_users',this.websocketservice.socket_user_id);

    }, 1000);
      this.websocketservice.getSocket().subscribe(socket => {
      this.online_users = socket;
      if (this.online_users){
      }
    });
    this.websocketservice.getBotSocket().subscribe(socket => {
       console.log('socket_ID',socket);
    });
    this.websocketservice.getMessageFromUser().subscribe(message => {
      console.log('getMessageFromUser', message);
      this.message_array.push(message);
      this.chat_autoscroll();
    });

    this.websocketservice.getMyMessage().subscribe(message => {
      console.log('my_message', message);
      this.message_array.push(message);
      this.chat_autoscroll();
    });



  }
  select_chat(){
this.toggle = !this.toggle;
  }
 send(){
    if (!this.toggle){
      this.send_message_to_bot();

    }else{
      this.sendMessage();
    }
 }
  send_message_to_bot(){
    this.websocketservice.send_message_to_bot({body: this.message.content, from_me: this.from_me = true}, this.event );
    //this.message_array.push({content: this.message.content});
    this.chat_autoscroll();
    this.message.content = '';
    this.websocketservice.getResponseFromBot().subscribe(message => {
      this.message_array.push(message);
    });
  }
  ngOnDestroy() {
  }
  _keyPress(event: any) {
    const pattern = /[a-zA-Z-0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  sendMessage(){
    this.websocketservice.send_message({body: this.message.content, sendTo: this.sendTo, from_me: this.from_me = true});

    console.log('own message sent', this.message.content);
    //this.message_array.push({content: this.message.content});
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
