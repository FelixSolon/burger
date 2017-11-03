var connection = require("./connection.js");

//Borrowed from previous activites, because it's a little easier than trying to write this bit myself.
//also I got sick of trying to just feed data into the functions, so we might as well use the actual MySQL package.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(object) {
  var arr = [];

  for (var key in object) {
    arr.push(key + "=" + object[key]);
  }

  return arr.toString();
}

var orm = {
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, values, callback){
        connection.query("INSERT INTO " + table + " (burger_name) VALUES('" + values + "');", function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(table, column, condition, callback){
        var queryString = "UPDATE " + table + " SET " + objToSql(column) + " WHERE " + condition;
        console.log(queryString)
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        })
    }
};

module.exports = orm;