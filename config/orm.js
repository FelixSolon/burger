var connection = require("connection.js");

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