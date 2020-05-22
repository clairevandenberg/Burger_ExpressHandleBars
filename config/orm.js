// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var tableName = "burgers";

var orm = {
// Performing a query of the entire table.
// Making use of the callback to ensure that data is returned only once the query is done.
 
// selectAll()
allBurgers: function(tableInput, cb) {
    var queryString = "SELECT * FROM " 
    connection.query(queryString, function(err, result) {
        cb(result);
    });
},

// insertOne()
insertOneBurger: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
// updateOne()
updateBurger:  function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  devourer: function(table, condition, cb) {
    var queryString = "Devourer Burger" + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the ORM object in module.exports.
module.exports = orm;
