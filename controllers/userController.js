var User = require('../models/User');

// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

var async = require('async');

exports.index = function(req, res) {
  res.send( req.user );
}
