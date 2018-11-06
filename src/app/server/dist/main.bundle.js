webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-chat-body>\n\n\n</app-chat-body>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_body_chat_body_component__ = __webpack_require__("./src/app/components/chat-body/chat-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_chat_body_chat_body_component__["a" /* ChatBodyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_5__services_chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/components/chat-body/chat-body.component.css":
/***/ (function(module, exports) {

module.exports = ".chat{\r\n width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  float: left;\r\n}\r\n.chat_block{\r\n\r\n  width: 80%;\r\n}\r\n.modal-content1 {\r\n  position: relative;\r\n  background-color: whitesmoke;\r\n width: 100%;\r\n}\r\n.modal-header1 {\r\n  padding: 2px 16px;\r\n  background-color: rgb(25, 164, 181);\r\n   width: 100%;\r\n\r\n  color: white;\r\n  height: 30vh\r\n}\r\n.close1 {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n.close1:hover,\r\n.close1:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.modal-body1 {\r\n  width: auto;\r\n  overflow: auto;\r\n  opacity: 0.8;\r\n  margin: 0;\r\n}\r\n.chat_body{\r\n  height: 60vh;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n}\r\n.message{\r\n   display: block;\r\n   float: right;\r\n   height: auto;\r\n   padding: 5px;\r\n\r\n   width: 70%;\r\n   background-color: #e2e2e2;\r\n   border-radius: 7px;\r\n   margin-top: 2px;\r\n   margin-left: 2px;\r\n }\r\n.name{\r\n  top: 0;\r\n  display: block;\r\n  left: 0;\r\n  float: left;\r\n  font-size: 10px;\r\n}\r\n.content{\r\n\r\n  display: block;\r\n  left: 0;\r\n  float: left;\r\n}\r\n.date{\r\n\r\n  display: block;\r\n  font-size: 8px;\r\n  float: right;\r\n}\r\n@media  (max-width: 368px) {\r\n  .modal-content1{\r\n\r\n    width: 100%;\r\n\r\n  }\r\n}\r\n.modal-footer1 {\r\n  opacity: 0.5;\r\n  color: black;\r\n}\r\n.modal-body1 p{\r\n  opacity: 1;\r\n}\r\n/*Стилі для сколбара*/\r\n::-webkit-scrollbar{\r\n  width:6px;\r\n\r\n}\r\n::-webkit-scrollbar-thumb{\r\n  border-width:1px 1px 1px 2px;\r\n  border-color: #777;\r\n  background-color: #aaa;border-radius: 15px;\r\n\r\n}\r\n::-webkit-scrollbar-thumb:hover{\r\n  border-width: 1px 1px 1px 2px;\r\n  border-color: #555;\r\n  background-color: #777;\r\n}\r\n::-webkit-scrollbar-track{\r\n  border-width:0;\r\n}\r\n::-webkit-scrollbar-track:hover{\r\n  background-color: #e7e7e7;\r\n}\r\n/*back_panel*/\r\n.back_panel{\r\n  width: 20%;\r\n\r\n}\r\n.list-group-item-action.active {\r\n  z-index: 1;\r\n  color: #000000;\r\n\r\n  border: none;\r\n  background-color: white;\r\n}\r\n.list-group-item-action{\r\n  color: #000000;\r\n  border: none;\r\n  background-color: #f5f5f5;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid lightgrey;\r\n  border-left: 1px solid lightgrey;\r\n  border-right: 1px solid lightgrey;\r\n\r\n}\r\n/*.list-group-item-action:hover{\r\n\r\n  background-color: #fdfdfd;\r\n  border-radius: 0;\r\n}\r\n*/\r\n/* logo*/\r\n.imgW {\r\n  border: 1px solid gray;\r\n  width: 20vh;\r\n  height: 20vh;\r\n  position: relative;\r\n}\r\n.imgW>img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/chat-body/chat-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat\">\n  <div   class=\"chat_block \">\n    <!-- Modal content -->\n    <div class=\"modal-content1\">\n      <div   class=\"modal-header1\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n\n            <img width=\"170px\"  class=\"img-fluid\"    src=\"../../../assets/images/rick.png\">\n          </div>\n          <div class=\"col-sm-9\">\n\n            <h2>\n              Reverse bot\n            </h2>\n            <!--<p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Phasellus nisl orci, sagittis quis consequat et,\n              luctus non urna. Aliquam vitae ullamcorper mi.\n              Nunc in diam leo. Nulla ut elementum metus.\n              Maecenas velit risus, egestas id porta et, ultricies eget odio.\n              Integer sed maximus massa, ut sagittis libero.\n              Morbi eget purus pellentesque, rhoncus sem ut, sodales elit.\n              Suspendisse libero velit, volutpat ut blandit non, hendrerit a quam.\n            </p>\n-->\n\n            <div class=\"tab-content\" id=\"nav-tabContent1\">\n\n              <div class=\"tab-pane fade show active\" id=\"list-profile1\" role=\"tabpanel\" aria-labelledby=\"list-profile-list1\">2</div>\n              <div class=\"tab-pane fade\" id=\"list-profile3\" role=\"tabpanel\" aria-labelledby=\"list-profile-list3\">3</div>\n            </div>\n            <!--\n                      <div class=\"row m-0\">\n                        <div class=\"col-12 p-0\">\n                          <div class=\"tab-content\" id=\"nav-tabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"list-home\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">online</div>\n                            <div class=\"tab-pane fade\" id=\"list-profile\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">All</div>\n                          </div>\n                        </div>\n                      </div>  -->\n          </div>\n        </div>\n\n\n\n      </div>\n      <div class=\"modal-body1 \">\n        <!-- chat -->\n\n          <div  class=\"chat_body\" >\n\n            <div *ngFor=\"let message  of message_array;\" class=\"message\">\n                <div class=\"name\">\n                  {{message.id}}\n                </div>\n                <br>\n                <div class=\"content\">\n                  {{message.content}}\n                </div>\n                <br>\n                <div class=\"date\">\n                  {{message.date}}\n                </div>\n            </div>\n\n\n          </div>\n          <form  class=\"p-1 form-inline\" (ngSubmit)=\"sendMessage()\"  >\n            <div style=\"width: 65%\" class=\"form-group ml-3\">\n              <input [(ngModel)]=\"message.content\" #content = \"ngModel\"  style=\"width: 100%\"   name=\"content\" required pattern=\"\"  class=\"form-control\"    placeholder=\"write smth\">\n            </div>\n            <button [disabled]=\"content.invalid\" type=\"submit\" style=\"width: 30%\"   class=\"btn btn-info ml-2\">send</button>\n          </form>\n\n\n      </div>\n      <!-- <div class=\"modal-footer1\">\n         <h3>Modal Footer</h3>\n       </div>\n       -->\n    </div>\n  </div>\n\n  <div class=\"back_panel\">\n\n    <div class=\"row m-0\">\n<div class=\"col-12 p-0\">\n\n\n        <div class=\"list-group flex-row\" id=\"list-tab2\" role=\"tablist\">\n          <a class=\"list-group-item list-group-item-action active p-1\" id=\"list-home-list2\" data-toggle=\"list\" href=\"#list-home2\" role=\"tab\" aria-controls=\"home2\">Online</a>\n          <a class=\"list-group-item list-group-item-action p-1\" id=\"list-profile-list2\" data-toggle=\"list\" href=\"#list-profile2\" role=\"tab\" aria-controls=\"profile2\">All</a>\n\n      </div>\n</div>\n\n\n    </div>\n\n    <div class=\"row m-0\">\n      <div class=\"col-12 p-0\">\n      <div class=\"tab-content\" id=\"nav-tabContent2\">\n        <div class=\"tab-pane fade show active\" id=\"list-home2\" role=\"tabpanel\" aria-labelledby=\"list-home-list2\">\n\n          <div class=\"row m-0\">\n            <div class=\"col-12 p-0\">\n\n              <div class=\"list-group\" id=\"list-tab1\" role=\"tablist\">\n\n                <a  class=\"list-group-item list-group-item-action active \" id=\"list-profile-list1\" data-toggle=\"list\" href=\"#list-profile1\" role=\"tab\" aria-controls=\"profile1\">\n<div class=\"row\">\n                  <div class=\"col-4 p-0   \">\n                   2\n                  </div>\n\n\n                    <div class=\"col-8 p-0   \">\n                      2\n                    </div>\n                  </div>\n\n\n                </a>\n                <a  class=\"list-group-item list-group-item-action d-inline-block \" id=\"list-profile-list3\" data-toggle=\"list\" href=\"#list-profile3\" role=\"tab\" aria-controls=\"profile3\">\n<div class=\"row\">\n                  <div class=\"col-4 p-0   \">\n                   3\n                  </div>\n\n\n                  <div class=\"col-8 p-0   \">\n                    3\n                  </div>\n                  </div>\n                </a>\n              </div>\n\n\n            </div>\n\n          </div>\n\n        </div>\n        <div class=\"tab-pane fade\" id=\"list-profile2\" role=\"tabpanel\" aria-labelledby=\"list-settings-list2\">\n\n          <div *ngFor=\"let online of online_users\">\n            {{online}}\n          </div>\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n\n\n\n\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat-body/chat-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_message__ = __webpack_require__("./src/app/classes/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatBodyComponent = /** @class */ (function () {
    function ChatBodyComponent(chatservice, websocketservice) {
        this.chatservice = chatservice;
        this.websocketservice = websocketservice;
        this.message = new __WEBPACK_IMPORTED_MODULE_1__classes_message__["a" /* Message */]();
        this.message_array = [];
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__();
    }
    ChatBodyComponent.prototype.chat_autoscroll = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(document).ready(function () {
            var chat_body = __WEBPACK_IMPORTED_MODULE_5_jquery__('.chat_body');
            var chat_height = chat_body.prop('scrollHeight');
            chat_body.scrollTop(chat_height);
        });
    };
    ChatBodyComponent.prototype.sendMessage = function () {
        this.chatservice.sendmessage(this.message.content);
        this.chat_autoscroll();
    };
    ChatBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('online', function (numberOfOnlineUsers) {
            _this.online_users = numberOfOnlineUsers;
            console.log('number 0f online', numberOfOnlineUsers);
        });
        this.websocketservice.getMessages().subscribe(function (message) {
            _this.message_array = message;
            _this.message_array.reverse();
        });
        this.websocketservice.getSocket().subscribe(function (socket) {
            console.log('online_users', socket);
        });
        this.chatservice.messages.subscribe(function (msg) {
            _this.message.date = msg.date;
            _this.message._id = msg.id;
            _this.message.content = msg.content;
            _this.message_array.push({
                date: _this.message.date,
                _id: _this.message._id,
                content: _this.message.content,
            });
            _this.chat_autoscroll();
            _this.message.content = '';
        });
    };
    ChatBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chat-body',
            template: __webpack_require__("./src/app/components/chat-body/chat-body.component.html"),
            styles: [__webpack_require__("./src/app/components/chat-body/chat-body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */]])
    ], ChatBodyComponent);
    return ChatBodyComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(webService) {
        this.webService = webService;
        this.messages = webService
            .connect().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            console.log('response', response);
            return response;
        }));
    }
    ChatService.prototype.sendmessage = function (msg) {
        this.messages.next(msg);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ws_url);
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                console.log('Received message from Websocket Server', 'connected!');
                _this.socket.emit('receive_history');
                observer.next(data);
            });
            // this.socket.on('history', messages => {
            //  console.log('history', messages);
            //
            // });
            return function () {
                _this.socket.disconnect();
            };
        });
        var printed_message = {
            next: function (data) {
                _this.socket.emit('msg', data);
                console.log(data);
            },
        };
        var message_history = {
            next: function (data) {
                console.log('data', data);
                _this.socket.emit('history', data);
            },
        };
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"].create(printed_message, observable);
    };
    WebsocketService.prototype.getMessages = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            _this.socket.on('history', function (messages) {
                console.log('history', messages);
                // messages.reverse();
                observer.next(messages);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    };
    WebsocketService.prototype.getSocket = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            _this.socket.on('online', function (online_users) {
                observer.next(online_users);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ws_url: "http://localhost:8090"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap__ = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map