var express = require('express');
var router = express.Router();
var api = require('../controllers/api.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: "cineteca mx"});
}); 

//app.post('/thread', api.post);
router.get('/api/movie', api.list);
router.get('/api/movie/:day', api.show);


module.exports = router;
