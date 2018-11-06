import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import {WebsocketService} from './services/websocket.service';
import {ChatService} from './services/chat.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChatBodyComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [WebsocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
