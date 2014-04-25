/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns all movies and dates
   * show - Displays all movies per day 
*/
 
var Day = require('../models/day.js');
var Movie = require('../models/movie.js');

api = {};

api.list = function(req, res) {
  Day.find(function(err, dates) {
    res.send(dates);
  });
}

api.show = (function(req, res) {
    Day.findOne({ day: req.params.day }, function(error, date) {
      res.send(date);
    })
});

module.exports = api;