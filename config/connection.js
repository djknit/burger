const mysql = require("mysql");

const connection = mysql.createConnection({
    port: 3306,
    user: "root",
    password: process.env.MY_SQL_PASSWORD ? process.env.MY_SQL_PASSWORD : "",
    database: "burgers_db"
});

connection.connect(error => {
    if (error) return console.error(error);
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;