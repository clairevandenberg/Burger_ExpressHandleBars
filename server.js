var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./app/models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burger_controller.js");

// Routes
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
db.sequelize.sync().then(function () { // confirming tables are set up correctly syncs models to database
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
})