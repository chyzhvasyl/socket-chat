
let express = require('express');
let app = express();
let bodyParser    = require  ('body-parser') ;
let cors          = require  ('cors') ;
let corsOptions   = require  ('./config/cors') ;
let config        = require  ('./config/config.json') ;
let https = require('https');
let http  = require('http');
let path = require('path');
let intel = require('intel');
let fs = require('fs');
let morgan =  require('morgan');
// виносимо в окремий модуль
app.options('*', cors(corsOptions));
let socketIO = require('socket.io');
let server = http.createServer(app);
let io = socketIO(server);
require('./socket_chat/bot_socket')(io);


/* логгирование */
// intel.addHandler(new intel.handlers.File('./logs/file.log'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), {flags: 'a'});
// *** config middleware *** //
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.raw({limit: "50mb", extended: true, parameterLimit:50000}));
app.get('/', (req, res) => {});
app.post('/', (req, res) => {});
app.use(express.static(path.join(__dirname, "/")));


server.listen(config.serverBotPort,  config.serverBotHost,() => console.log(`Bot - Server listening at port %d:${config.serverBotPort}`));



