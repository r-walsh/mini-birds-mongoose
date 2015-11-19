// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var SightingCtrl = require('./controllers/SightingCtrl');
var UserCtrl = require('./controllers/userCtrl');

// Express
var app = express();

// Express Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints

/////////////
//SIGHTINGS//
/////////////
app.post('/sighting', SightingCtrl.create);
app.get('/sighting', SightingCtrl.read);
app.put('/sighting/:id', SightingCtrl.update);
app.delete('/sighting/:id', SightingCtrl.delete);

/////////
//USERS//
/////////
app.post('/api/user', UserCtrl.create);
app.get('/api/user', UserCtrl.read);
app.put('/api/user/:id', UserCtrl.update);
app.delete('/api/user', UserCtrl.delete);

// Connetions
var port = 11331;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('listening on port: ', port);
});
