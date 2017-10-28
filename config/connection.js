var mysql = require("mysql");
var MySQLPassword = require("../keys.js")
console.log(MySQLPassword);
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: MySQLPassword,
  database: "parties_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
