// Sequelize (capital) references the standard library
// const sequelize = require ("sequelize");

// sequelize (lowercase) references our connection to the DB.
// const Sequelize = require("../config/config.json");

// Creates a "Burger" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
        name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
});

return Burger;
}

// Syncs with DB
// Burger.sync()