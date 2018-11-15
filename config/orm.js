const connection = require("./connection");

const orm = {
    selectAll: () => {
        connection.query("SELECT * FROM burgers", promise);
    },
    insertOne: (burger) => {
        connection.query("INSERT INTO burgers ??", burger, promise);
    },
    updateOne: (burger) => {
        connection.query("UPDATE burgers SET ?? WHERE ??", [{ devoured: burger.devoured }, { id: burger.id }], promise);
    }
}

function promise(error, result) {
    if (error) return console.error(error);
    return result;
}

module.exports = orm;