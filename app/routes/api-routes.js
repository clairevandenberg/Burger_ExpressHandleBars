var db = require("../models");

// Routes
module.exports = function(app) {

  // GET route for getting all of the Burgers
  app.get('/', function(req, res) {
    db.Burger.findAll({}).then ( function (results) {
      res.json(results);
    });
  });

  // POST route for saving a new Burgers. We can create a Burgers using the data on req.body
  app.post("/api/burgers", function(req, res) {
    db.Burger.create({text: req.body.text, complete: req.body.complete}).then (function (results) {
      res.json(results);
    });
  });

  // DELETE route for deleting Burgers. We can access the ID of the Burgers to delete in
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({ 
      where: { 
        id: req.params.id
  }
}).then(function(results){
  res.json(results);
    console.log(results)
  });

  });

  // PUT route for updating Burgers. We can access the updated Burgers in req.body
  app.put("/api/burgers", function(req, res) {
    db.Burger.update(results,{ 
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    })

    .then(function(results){
      res.json(results);
      console.log(results);
    });

  });
};