var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/client.js');

/* GET ALL PRODUCTS */
router.get('/client', function(req, res, next) {
  Client.find({},function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;