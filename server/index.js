// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const app = express();



// App Setup

// morgan: logging server info
app.use(morgan('combined'));
// bodyParser: parsed as JSON any incoming request
app.use(bodyParser.json({ type: '*/*' }));
router(app);


// Server Setup
const port = process.env.PORT || 3090;
const server = http .createServer(app);
server.listen(port);
console.log('Server is listening on port: ', port);