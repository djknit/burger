const Burger = require("../models/Burger");

module.exports = {
    getList: () => Burger.selectAll(),
    add: burgerName => Burger.insertOne({
        burger_name: burgerName,
        devoured: false
    }),
    devour: burgerId => Burger.updateOne(
        { devoured: true },
        { id: burgerId }
    )
};