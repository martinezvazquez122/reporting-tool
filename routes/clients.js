var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/client.js');

/* GET ALL PRODUCTS */
router.get('/superuser/:superuserID/clients', function(req, res) {
  Client.find({},function (err, client) {
    if (err) return next(err);
    res.json(client);
  });
});

//GET CLIENT BY ID
router.get('/superuser/:superuserID/clients/:clientID', function(req, res) {
  Client.find({ _id: req.params.clientID}, function (err, client) {
    if (err || !client) {
      res.json(err);
    } else {
      res.json(client);
    }
  });
});

module.exports = router;