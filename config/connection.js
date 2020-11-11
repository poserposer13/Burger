const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "s1cdyhk7m1kz65ch",
  password: "es3x8nujiwcu73ky",
  database: "s12moo2txe7gr34j"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
