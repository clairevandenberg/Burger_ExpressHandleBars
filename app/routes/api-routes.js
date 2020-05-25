const db = require("../models");

// Routes
module.exports = function(app) {

  // GET route for getting all of the Burgers
  app.get('/', function(req, res) {
    db.burgers.findAll({}).then ( function (results) {
      
    
      let burgerData = results.map(function (burger) {
        return burger.dataValues
      });
      console.log(burgerData)

      res.render("index", {burgers: burgerData});
    });
  });

  // POST route for saving a new Burgers. We can create a Burgers using the data on req.body
  app.post("/api/burgers", function(req, res) {
    console.log(req.body)
    db.burgers.create({name:req.body.name,devoured:false}).then (function (results) {
      res.redirect('/');
    });
  });

//Devourer Route for saving devoured burgers. Setting it to devoured from not eaten. 
  app.post("/api/devoured/:id", function(req, res) {
    console.log(req.params);
    db.burgers.update({devoured:true}, {where:{id:req.params.id}}).then (function (results) {
      res.redirect('/');
    });
  });

  // DELETE route for deleting Burgers. We can access the ID of the Burgers to delete in
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    db.burgers.destroy({ 
      where: { 
        id: req.params.id
  }
}).then(function(results){
  res.redirect('/');
  });
  });

  // PUT route for updating Burgers. We can access the updated Burgers in req.body
  app.put("/api/burgers", function(req, res) {
    db.burgers.update(results,{ 
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

