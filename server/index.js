// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


// DB Setup
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);


// App Setup

// morgan: logging server info
app.use(morgan('combined'));
app.use(cors());

// bodyParser: parsed as JSON any incoming request
app.use(bodyParser.json({ type: '*/*' }));
router(app);


// Server Setup
const port = process.env.PORT || 3090;
const server = http .createServer(app);
server.listen(port);
console.log('Server is listening on port: ', port);