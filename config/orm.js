var connection = require("connection.js");

//Borrowed from previous activites, because it's a little easier than trying to write this bit myself.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
    selectAll: function(table){
        var queryString = "SELECT * FROM ?"
        connection.query(queryString, table, function(err, result){
            console.log(result);
        });
    },
    insertOne: function(table, columns, values){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") VALUES (";
        queryString += values.toString();
        queryString += ");"
        connection.query(queryString, function(err, result){
            console.log(result);
        });
    },
    updateOne: function(table, column, value, condition, callback){
        var queryString = "UPDATE " + table + " SET '" + column + "' TO " + value + " " + condition;
        connection.query(queryString, function(err, result){
            console.log(result);
        })
    }
};

module.exports = orm;