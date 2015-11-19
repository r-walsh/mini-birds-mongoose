var Sighting = require('../models/Sighting');

module.exports = {

  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  read: function(req, res) {
    Sighting.find().populate('user').exec().then(function( sightings, err ) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(sightings);
      }
    });
  },

  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }
};