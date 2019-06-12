var express = require('express');
var router = express.Router();
var User = require('../controllers/userController');

router.get( '/:username', User.index );

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
