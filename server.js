// Server setup
/*jshint esversion: 6*/
(function(){
  'use strict';
})();

// Dependencies
const express = require('express'),
      path = require('path'),
      http = require('http'),
      bodyParser = require('body-parser');

// Path Dependencies (api)
const api = require('./server/routes/api.js');

// App setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist'))); // dist of Angular bundle directory post ng serve

// App routing
app.use('/api', api);
app.use('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Server setup & Listen
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server running on localhost:${port}`));
