// Sequelize (capital) references the standard library
const sequelize = require ("sequelize");

// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burgers", {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;