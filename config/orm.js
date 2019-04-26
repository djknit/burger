const connection = require("./connection");

module.exports = {
    selectAll: (tableName, callback) => {
        connection.query("SELECT * FROM ??", [tableName], (error, results) => {
            if (error) return console.error(error);
            callback(results);
        });
    },
    insertOne: (tableName, entryObject, callback) => {
        connection.query("INSERT INTO ?? SET ?", [tableName, entryObject], (error, results) => {
            if (error) return console.error(error);
            callback(results);
        });
    },
    updateOne: (tableName, updatedPropertiesObject, idObject, callback) => {
        connection.query("UPDATE ?? SET ? WHERE ?",
            [tableName, updatedPropertiesObject, idObject],
            (error, results) => {
                if (error) return console.error(error);
                callback(results);
            }
        );
    }
}