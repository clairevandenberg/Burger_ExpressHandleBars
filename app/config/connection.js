// setup the code to connect Node to MySQL.
// Export the connection.// Set up MySQL connection.
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burgerlist_db", "root", "", {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "QAws10981093",
  database: "burgerlist_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports the connection for other files to use
module.exports = sequelize;
