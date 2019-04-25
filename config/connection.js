const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        port: 3306,
        user: "root",
        password: process.env.MY_SQL_PASSWORD ? process.env.MY_SQL_PASSWORD : "",
        database: "burgers_db"
    });
}

connection.connect(error => {
    if (error) return console.log(error);
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;