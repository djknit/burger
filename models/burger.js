const orm = require("../config/orm");

module.exports = {
    getBurgerList: () => orm.selectAll(),
    insertBurger: (burgerName) => orm.insertOne({
        burger_name: burgerName,
        devoured: false
    }),
    updateBurger: (burger) => {
        burger.devoured = true;
        return orm.updateOne(burger);
    }
}