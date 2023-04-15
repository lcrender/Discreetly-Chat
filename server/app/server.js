const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
let server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use(require('./routes/auth.routes'));
app.use(require('./routes/rooms.routes'));
app.use((req, res, next) => {
	res.status(404).json({ message: 'endpoint not found' });
});
// Comunicacion sockets
module.exports.io = socketIO(server);
require('./socket');

module.exports = server;