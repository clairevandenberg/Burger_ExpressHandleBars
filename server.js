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

// Routes
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
})