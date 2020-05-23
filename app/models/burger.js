module.exports = function(sequelize, DataTypes) { // exports class creates the model. Takes seralize which is link to libary and datatypes (list of types in database);
  var Burger = sequelize.define("Burger", { //declaring mdoel. Burger references the table.
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Burger;
};