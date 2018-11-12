import { Injectable } from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ChatService {
//  messages: Subject<any>;
//  constructor(private webService: WebsocketService) {
//
//    this.messages = <Subject<any>>webService
//      .connect().pipe(
//        map((response: any): any => {
//          console.log('response', response);
//
//          return response;
//        })
//      );
//  }
//  sendmessage(msg)
//  {
//    this.messages.next(msg);
//  }
//
  visible_images = [];
  getimages (  )
  {
    return this.visible_images = images.slice(0);
  }
}
const images = [
  {'id': 'echo', 'name': 'echo bot', 'url':    'assets/images/chat_bot_1.png', 'event': 'echo_bote'     },
  {'id': 'reverse', 'name': 'reverse bot', 'url': 'assets/images/chat_bot_2.jpg', 'event': 'reverse_bote'   },
  {'id': 'ignore', 'name': 'ignore bot', 'url':  'assets/images/chat_bot_3.jpg' , 'event': 'ignore_bote'   },
  {'id': 'spam', 'name': 'spam bot', 'url':    'assets/images/chat_bot_4.png'   , 'event': 'spam_bote'   }
];
