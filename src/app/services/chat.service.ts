import { Injectable } from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ChatService {
  messages: Subject<any>;
  constructor(private webService: WebsocketService) {

    this.messages = <Subject<any>>webService
      .connect().pipe(
        map((response: any): any => {
          console.log('response', response);

          return response;
        })
      );
  }
  sendmessage(msg)
  {
    this.messages.next(msg);
  }


}
