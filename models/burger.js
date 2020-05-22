// import orm.js into burger.js

// create the code that will call the ORM functions using burger specific input for the ORM.


// Export at the end of the burger.js file.

var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// Creating a "Chirp" model that matches up with DB
var NewBurger = sequelize.define("burger", {
    burgerName: Sequelize.STRING,
  });
  
  // Syncs with DB
  NewBurger.sync();
  
  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = NewBurger;
