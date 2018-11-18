const orm = require("../config/orm");

module.exports = {
    getBurgerList: (callback) => orm.selectAll("burgers", callback),
    insertBurger: (burgerName, callback) => orm.insertOne(
        "burgers",
        {
            burger_name: burgerName,
            devoured: false
        },
        callback
    ),
    updateBurger: (burgerId, callback) => {
        orm.updateOne(
            "burgers",
            { devoured: true },
            { id: burgerId },
            callback
        );
    }
}