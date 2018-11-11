import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import {WebsocketService} from './services/websocket.service';
import {ChatService} from './services/chat.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FilterUserPipe } from './components/pipes/filter-user.pipe';
import { BackpanelComponent } from './components/backpanel/backpanel.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@NgModule({
  declarations: [
    AppComponent,
    ChatBodyComponent,
    FilterUserPipe,
    BackpanelComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [WebsocketService, ChatService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
